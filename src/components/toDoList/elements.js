// import { GrAdd } from 'react-icons/gr';
import { useState, React } from 'react'
import { Table } from 'semantic-ui-react'
import Element from './element'
import EditElement from './editElement'
// loop the element
function Elements() {
  const [elements, setElements] = useState([]);
  function addElement(element)
  {
    setElements([...elements, element]);
  }
  return (
    <Table.Body>
      {elements.map((element, index) => (
        <Element key = { index } element = { element }/>
      ))}
      <EditElement addElement = { addElement }/>
    </Table.Body>
  );
}
export default Elements;