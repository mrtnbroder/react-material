import * as React from 'react'

import '../../App.css'

import { Typography, Card } from 'react-material'

class App extends React.Component {
  render() {
    return (
      <Card className="Card Card--center">
        <Typography type="headline1">Headline1</Typography>
        <Typography type="headline2">Headline2</Typography>
        <Typography type="headline3">Headline3</Typography>
        <Typography type="headline4">Headline4</Typography>
        <Typography type="headline5">Headline5</Typography>
        <Typography type="headline6">Headline6</Typography>
        <Typography type="subtitle1">Subtitle1</Typography>
        <Typography type="subtitle2">Subtitle2</Typography>
        <Typography type="body1">Body1</Typography>
        <Typography type="body2">Body2</Typography>
        <Typography type="caption">Caption</Typography>
        <Typography type="button" color="secondary">
          Button
        </Typography>
        <Typography type="overline">Overline</Typography>
      </Card>
    )
  }
}

export default App
