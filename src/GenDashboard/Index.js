import styled from '@emotion/styled'
import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import MainContent from './MainContent'
import Navbar from './Navbar'
import Brand from './Pages/Brand'
import CategoryPage from './Pages/CategoryPage'
import ProductPage from './Pages/ProductPage'
import StaticPage from './Pages/StaticPage'
import Sidebar from './Sidebar'

const Index = () => {
  let { path } = useRouteMatch();

  return (
    <Box sx={{ width: '100vw', height: '100vh' }} bgcolor='#e9ecef'>
      <Stack direction='row' sx={{ height: '100%' }}>
        <Sidebar />
        <Box flex={4}>
          <Navbar />
          <Box p={3}>
            <Switch>
              <Route exact path={`${path}/dashboard`}>
                <MainContent />
              </Route>
              <Route exact path={`${path}/brand`}>
                <Brand />
              </Route>
              <Route exact path={`${path}/`}>
                <Redirect to={`${path}/dashboard`} />
              </Route>
              <Route exact path={`${path}/categories`}>
                <CategoryPage />
              </Route>
              <Route exact path={`${path}/static`}>
                <StaticPage />
              </Route>
              <Route exact path={`${path}/products`}>
                <ProductPage />
              </Route>
            </Switch>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default Index