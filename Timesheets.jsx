import React, { useState } from 'react';
import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Radio } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

const timesheetData = [
  { id: 1, username: 'Shalini Akkapelli', startDate: '01 Mar 2024', endDate: '31 Mar 2024' },
  { id: 2, username: 'Shalini Akkapelli', startDate: '01 Feb 2024', endDate: '29 Feb 2024' },
  { id: 3, username: 'Shalini Akkapelli', startDate: '01 Jan 2024', endDate: '31 Jan 2024' },
];

const Timesheets = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleRadioChange = (event) => {
    setSelectedValue(parseInt(event.target.value));
  };

  return (
    <Box sx={{ mt: 3, border: '3px solid grey', padding: '10px', position: 'relative', width: '700px', height: '300px' }}>
      <Container maxWidth="md" sx={{ padding: '0 !important' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextSnippetOutlinedIcon fontSize="medium" sx={{ marginRight: '5px' }} />
            <Typography variant="h6" component="div" sx={{ fontSize: '1rem' }}>
              Timesheets (2)
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body2" sx={{ mr: 1 }}>Filters</Typography>
            <IconButton aria-label="filter" size="small">
              <FilterListIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        <TableContainer component={Paper} sx={{ mt: 1 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>
                  <Typography variant="body2">Username</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">Start Date</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">End Date</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {timesheetData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <Radio
                      checked={selectedValue === row.id}
                      onChange={handleRadioChange}
                      value={row.id}
                      name="timesheet-radio"
                      size="small"
                      inputProps={{ 'aria-label': row.username }}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{row.username}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{row.startDate}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{row.endDate}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
     
      <IconButton
        aria-label="add"
        sx={{
          position: 'absolute',
          bottom: '8px',
          right: '10px',
        }}
        size="small"
      >
        <AddBoxOutlinedIcon fontSize="medium" />
      </IconButton>
    </Box>
  );
}

export default Timesheets;
