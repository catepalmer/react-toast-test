import React, { Component } from 'react'
import { ToastConsumer, ToastProvider, withToastManager } from 'react-toast-notifications'

class FormComponent extends Component {
  onSubmit = () => {
    const { toastManager } = this.props;
      toastManager.add('Saved Successfully', { appearance: 'success' })
  }
  render() {
    return <form onSubmit={this.onSubmit}>...</form>;
  }
}

// wrap your component to pass in the `toastManager` prop
const FormWithToasts = withToastManager(FormComponent)

const App = () => (
  <ToastProvider>
    <FormWithToasts />

    {/* or if render props are more your speed */}
    <ToastConsumer>
      {({ add }) => (
        <button onClick={(e) => add(`Notified by ${e.target}`)}>
          Toasty
        </button>
      )}
    </ToastConsumer>
  </ToastProvider>
)

export default App



