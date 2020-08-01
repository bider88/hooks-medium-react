import React from 'react'

const Jumbotron = () => {
  const cardClass = `jumbotron jumbotron-fluid ${ this.props.bg && `bg-${this.props.bg}` } ${ this.props.bg && `text-${this.props.color}` }` ;
  return (
    <div className={cardClass}>
      <div className="container">
        <h1 className="display-4">{ this.props.title }</h1>
        <p className="lead">{ this.props.content }</p>
      </div>
    </div>
  )
}

export default Jumbotron;