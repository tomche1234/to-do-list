// import { GrAdd } from 'react-icons/gr';
import { React } from 'react'
import { Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Elements from './elements'

// main
function ToDoList() {
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={1}>Task</Table.HeaderCell>
            <Table.HeaderCell width={1}>Date</Table.HeaderCell>
            <Table.HeaderCell width={1}>Status</Table.HeaderCell>
            <Table.HeaderCell width={1}>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Elements />
      </Table>
    </div>

  );
}

export default ToDoList;