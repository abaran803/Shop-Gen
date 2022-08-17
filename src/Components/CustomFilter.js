import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader'

const CustomFilter = ({ setShowFilter, showFilter, categories, storeId, rangeValue, changeHandler }) => {
    return (
        <React.Fragment>
            <h4 className="mb-5 border-bottom d-flex justify-content-between">
                <div>Filters</div>
                <div className="bg bg-secondary m-1 p-1 rounded text-white" onClick={() => setShowFilter(value => !value)} style={{ fontSize: "0.9rem", cursor: "pointer" }}>{showFilter ? 'Hide' : 'Show'}</div>
            </h4>
            <div className={`mb-5 ${!showFilter ? 'd-none' : ''}`}>
                <label>
                    <b>Category</b>
                </label>
                <ul className="list-group">
                    {categories ? categories.map(category => (
                        <li className="list-group-item" key={category.id}>
                            <Link
                                to={`/${storeId}/product/category/${category.category}`}>{category.category}</Link>
                        </li>
                    )) : <Loader />}
                </ul>
            </div>
            <div className={!showFilter ? 'd-none' : ''}>
                <form>
                    <div className="form-group">
                        <label>
                            <b>Price</b>
                        </label>
                        <input
                            onChange={changeHandler}
                            type="range"
                            min="50"
                            max="1000"
                            step="50"
                            className="form-control-range"
                            value={rangeValue}
                        />
                    </div>
                </form>
                <div className="d-flex justify-content-between">
                    <label>${rangeValue}</label>
                    <label>$1000</label>
                </div>
            </div>
        </React.Fragment>
    )
}

const CustomFilterMaterial = ({ setShowFilter, showFilter, categories, storeId, rangeValue, changeHandler }) => {
    return (
        <React.Fragment>
            <h4 className="mb-5 border-bottom d-flex justify-content-between">
                <Typography variant='h4'>Filters</Typography>
                <div className="bg bg-secondary m-1 p-1 rounded text-white d-flex align-items-center" onClick={() => setShowFilter(value => !value)} style={{ fontSize: "0.9rem", cursor: "pointer" }}>{showFilter ? 'Hide' : 'Show'}</div>
            </h4>
            <div className={`mb-5 ${!showFilter ? 'd-none' : ''}`}>
                <label>
                    <Typography variant='h5'>Category</Typography>
                </label>
                {categories && <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableBody>
                            {categories.map((category, id) => (
                                <TableRow
                                    key={id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell sx={{ fontSize: '1.1rem' }}>
                                        <Link to={`/${storeId}/product/category/${category.category}`}>
                                            {category.category}
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>}
            </div>
        </React.Fragment>
    )
}

export default CustomFilterMaterial