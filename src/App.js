import * as SCSS from './scssAndClassnames'
import * as Emotion from './emotion'
import * as SC from './styledComponents'

const App = () => {
  return (
    <>
      <h1>CSS modules, SCSS, & classnames</h1>
      <p>
        <SCSS.Button>default button</SCSS.Button>
        <SCSS.Button primary>primary button</SCSS.Button>
        <SCSS.DangerButton>danger button</SCSS.DangerButton>
        <SCSS.DangerButton primary>primary danger button</SCSS.DangerButton>
      </p>

      <h1>emotion</h1>
      <p>
        <Emotion.Button>default button</Emotion.Button>
        <Emotion.Button primary>primary button</Emotion.Button>
        <Emotion.DangerButton>danger button</Emotion.DangerButton>
        <Emotion.DangerButton primary>primary danger button</Emotion.DangerButton>
      </p>

      <h1>styled-components</h1>
      <p>
        <SC.Button>default button</SC.Button>
        <SC.Button primary>primary button</SC.Button>
        <SC.DangerButton>danger button</SC.DangerButton>
        <SC.DangerButton primary>danger primary button</SC.DangerButton>
      </p>

      <h1>no styles!</h1>
      <p>
        <button>unstyled button</button>
      </p>
    </>
  );
}

export default App