// import { GrAdd } from 'react-icons/gr';
import { useState, React } from 'react';
import { Table } from 'semantic-ui-react'
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
// for new element
function EditElement(props) {
  const [date, setDate] = useState(new Date());
  const [taskName, setTaskName] = useState("")
  function addElement()
  {
    const newElement = {
      name: taskName,
      date: date.toString('yyyy')
    }
    setDate(new Date())
    setTaskName("")
    props.addElement(newElement)
  }

  return (
    <Table.Row>
      <Table.Cell><input placeholder='Task' onChange={(taskName) => setTaskName(taskName.target.value)} value={taskName}/></Table.Cell>
      <Table.Cell>
        <DateTimePicker onChange={setDate} value={date} />
      </Table.Cell>
      <Table.Cell></Table.Cell>
      <Table.Cell>
        <button className="ui button" onClick={addElement} disabled={!taskName}>confirm</button>
      </Table.Cell>
    </Table.Row>
  );
}

export default EditElement;