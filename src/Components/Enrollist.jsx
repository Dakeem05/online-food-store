import "../style.css";
import { useEffect, useState } from "react";
import { DetailsList } from "@fluentui/react/lib/DetailsList";

export const Enrollist = (props) => {
  const [itemm, setItemm] = useState([]);
   
    const columns = [
      { key: "edit",
      name: "Edit",
      fieldName: "edit",
      minWidth: 30,
      maxWidth: 200,
      isResizable: true,
      },
        {
        key: "fname",
        name: "First Name",
        fieldName: "fname",
        minWidth: 90,
        maxWidth: 200,
        isResizable: true,
        },
        {
        key: "lname",
        name: "Last Name",
        fieldName: "lname",
        minWidth: 90,
        maxWidth: 200,
        isResizable: true,
        },
        {
        key: "program",
        name: "Program",
        fieldName: "program",
        minWidth: 60,
        maxWidth: 200,
        isResizable: true,
        },
        {
        key: "email",
        name: "Email",
        fieldName: "email",
        minWidth: 130,
        maxWidth: 200,
        isResizable: true,
        },
        {
          key: "delete",
          name: "Delete",
          fieldName: "delete",
          minWidth: 50,
          maxWidth: 200,
          isResizable: true,
          },
       ];
    useEffect(() => {
        const curItemKey = props.studentDetails.key;
        if(curItemKey)    {
          setItemm([...itemm, props.studentDetails])
          // console.log(itemm)
        }   
        if(props.action === "delete"){
          const deleteItem = itemm.filter((item)=>{
             item.key === props.selectedItemId
          });
          setItemm(itemm.filter((item)=> item !== deleteItem))
          alert(deleteItem)
          props.restoreSeats(deleteItem.program)
        } 
      }, [props])
  return (
    <div className="enrolList">
        <DetailsList items={itemm} columns={columns} />
    </div>
  )
}
