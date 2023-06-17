import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'

import { HeaderTable, Acoes } from './styles'

import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import ZoomInRoundedIcon from '@mui/icons-material/ZoomInRounded'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'

import { useNavigate } from 'react-router-dom'

import axios from 'axios'

export default function StickyHeadTable() {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [livros, setLivros] = useState([])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        'http://localhost:8000/livros?_sort=dataCriacao&_order=desc',
      )
      const data = response.data
      setLivros(data.reverse())
    }
    fetchData()
  }, [])

  function handleDelete(row) {}
  function handleView(row) {}

  const rows = livros.map((livro) => ({
    id: livro._id,
    titulo: livro.titulo,
    autor: livro.autor,
    descricao: livro.descricao,
    acoes: '',
  }))

  const columns = [
    { id: 'titulo', label: 'Titulo', minWidth: 170, align: 'center' },
    { id: 'autor', label: 'Autor', minWidth: 100, align: 'center' },
    {
      id: 'acoes',
      label: 'Ações',
      minWidth: 170,
      align: 'center',
      format: (value, row) => (
        <Acoes>
          <button onClick={() => handleView(row)} className="config-view">
            <ZoomInRoundedIcon fontSize="small" />
            Detalhes
          </button>
          <button onClick={() => handleDelete(row)} className="config-delete">
            <DeleteForeverRoundedIcon fontSize="small" />
            Remover
          </button>
        </Acoes>
      ),
    },
  ]

  function novoLivro() {
    navigate('/novo-livro')
  }

  return (
    <>
      <Paper
        sx={{
          width: '100%',
          overflow: 'hidden',
          backgroundColor: '#2B2B4B',
        }}
      >
        <HeaderTable>
          <p>
            <MenuBookRoundedIcon />
            Lista de Livros
          </p>
          <button className="novo-livro" onClick={novoLivro}>
            <AddCircleOutlineRoundedIcon />
            Novo Livro
          </button>
        </HeaderTable>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      backgroundColor: '#000',
                      color: '#fff',
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        return (
                          <TableCell
                            sx={{ color: '#fff' }}
                            key={column.id}
                            align={column.align}
                          >
                            {column.format
                              ? column.format(row[column.id], row)
                              : row[column.id]}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          sx={{ backgroundColor: '#000', color: '#fff' }}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          nextIconButtonProps={{ style: { color: '#fff' } }}
          backIconButtonProps={{ style: { color: '#fff' } }}
        />
      </Paper>
    </>
  )
}
