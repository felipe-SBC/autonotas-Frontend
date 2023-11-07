import { Box } from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const columns = [
    { field: 'id_disciplina', headerName: 'Disciplina', width: 90 },
    {
      field: 'nome_disciplina',
      headerName: 'Nome da Disciplina',
      width: 150,
      editable: true,
    },
    {
      field: 'nome_professor',
      headerName: 'Nome do Professor',
      width: 150,
      editable: true,
    },
];

const Dashboard = () => {
    const [rows, setRows] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const consulta = async () => {
          try {
            const resposta = await fetch("http://localhost:8080/disciplinas");
    
            const dados = await resposta.json();
            console.log(JSON.stringify(dados));
    
            setRows(dados);
          } catch (error) {
            console.log(error);
          }
        };
        consulta();
    }, []);

    const handleClick = (id) => {
        navigate(`/disciplina/get/${id}`)
    }
    return (
        <Box>
            <DataGrid 
                getRowId={() => uuidv4()}
                onRowClick={handleClick(rows.id_disciplina)}
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
            />
        </Box>
    )
}

export default Dashboard