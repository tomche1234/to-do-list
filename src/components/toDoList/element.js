// import { GrAdd } from 'react-icons/gr';
import { useState, useEffect, React } from 'react';
import { Icon, Table } from 'semantic-ui-react'

function Element(props) {
  const [status, setStatus] = useState('processing')
  const [disabled, setDisabled] = useState(false)
  // for finish case
  function finish()
  {
    setStatus('finished')
    setDisabled(true)
  }
  // for fail case
  function cancel()
  {
    setStatus('cancelled')
    setDisabled(true)
  }
  const [dateCurrentTime, setDateCurrentTime] = useState(new Date())
  
  function refreshClock() {
    setDateCurrentTime(new Date())
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000)
    return function cleanup() {
      clearInterval(timerId)
    };
  }, [])
  const isOverTime = dateCurrentTime > Date.parse(props.element.date)
  // function checkTime()
  // {
  //   const isOverTime = dateCurrentTime > Date.parse(props.element.date)
  //   // const isOverTime = false
  //   setOverTime(isOverTime)
  //   console.log(overTime)
  // }
  function StatusHtml()
  {
    if(status === 'finished')
    {
      return <Table.Cell positive><Icon name='checkmark' />{status}</Table.Cell>
    }
    else if(status === 'cancelled')
    {
      return <Table.Cell negative><Icon name='close' />{status}</Table.Cell>
    }
    else
    {
      return <Table.Cell negative={isOverTime}>{status}</Table.Cell>
    }
  }
  function getTheDate()
  {
    const date = new Date(props.element.date)
    return date.toUTCString();
  }
  return (
    <Table.Row>
      <Table.Cell>{props.element.name}</Table.Cell>
      <Table.Cell>{getTheDate()}</Table.Cell>
      <StatusHtml />
      <Table.Cell>
        <div>
          <button className="ui button" disabled={disabled} onClick={finish}>finish</button>
          <button className="ui button" disabled={disabled} onClick={cancel}>cancel</button>
        </div>
      </Table.Cell>
    </Table.Row>
  )
}
// let status = 'processing'


export default Element;