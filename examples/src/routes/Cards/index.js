import * as React from 'react'

import '../../App.css'

import { Grid, Card, Typography } from 'react-material'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grid>
          <Grid item>
            <Card>
              <Typography type='subtitle1'>8</Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <Typography type='subtitle1'>8</Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <Typography type='subtitle1'>8</Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <Typography type='subtitle1'>8</Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid>
          <Grid item lg='auto'>
            <Card>
              <Typography type='subtitle1'>3.5</Typography>
            </Card>
          </Grid>
          <Grid item lg='auto'>
            <Card>
              <Typography type='subtitle1'>3.5</Typography>
            </Card>
          </Grid>
          <Grid item lg={3}>
            <Card>
              <Typography type='subtitle1'>3</Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid>
          <Grid item xs={4} lg={9}>
            <Grid margin={0}>
              <Grid item xs={2} lg={6}>
                <Card>
                  <Typography type='subtitle1'>Nested</Typography>
                </Card>
              </Grid>
              <Grid item xs={2} lg={6}>
                <Card>
                  <Typography type='subtitle1'>Nested</Typography>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Card>
              <Typography type='subtitle1'>16</Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <Typography type='subtitle1'>16</Typography>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
              <Typography type='subtitle1'>16</Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid>
          <Grid item xs={2}>
            <Card>
              <Typography type='subtitle1'>24</Typography>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
              <Typography type='subtitle1'>24</Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid>
          <Grid item>
            <Card>
              <Typography type='subtitle1'>1</Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <Typography type='subtitle1'>2</Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <Typography type='subtitle1'>3</Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <Typography type='subtitle1'>4</Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <Typography type='subtitle1'>5</Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <Typography type='subtitle1'>6</Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <Typography type='subtitle1'>7</Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <Typography type='subtitle1'>8</Typography>
            </Card>
          </Grid>
          <Grid item md={2}>
            <Card>
              <Typography type='subtitle1'>9</Typography>
            </Card>
          </Grid>
          <Grid item md={2}>
            <Card>
              <Typography type='subtitle1'>10</Typography>
            </Card>
          </Grid>
          <Grid item md={2}>
            <Card>
              <Typography type='subtitle1'>11</Typography>
            </Card>
          </Grid>
          <Grid item md={2}>
            <Card>
              <Typography type='subtitle1'>12</Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid>
          <Grid item xs={2} md={6} lg={10}>
            <Card>
              <Typography type='subtitle1'>1</Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <Typography type='subtitle1'>11</Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <Typography type='subtitle1'>12</Typography>
            </Card>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

export default App
