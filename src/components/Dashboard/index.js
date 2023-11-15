import { Box } from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from "../../Context";


const columns = [
    { field: 'idDisciplina', headerName: 'Disciplina', width: 90 },
    {
      field: 'nomeDisciplina',
      headerName: 'Nome da Disciplina',
      width: 150,
      editable: true,
    },
    {
      field: 'nomeProfessor',
      headerName: 'Nome do Professor',
      width: 150,
      editable: true,
    },
];

const Dashboard = () => {
    const [rows, setRows] = useState([{}])
    const navigate = useNavigate()
    const {userId} = useContext(UserContext)
    const idProfesosr = userId

    console.log(idProfesosr)


    useEffect(() => {
        const consulta = async () => {
          try {
            const resposta = await fetch(`http://localhost:8080/disciplinas/professor/disciplina/${idProfesosr}`);
            
            const dados = await resposta.json();
            console.log(JSON.stringify(dados));
            
            setRows(dados);
            console.log(rows)
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
              onRowClick={(params) => handleClick(params.row.idDisciplina)}
          />
        </Box>
    )
}

export default Dashboard