import { Select, SelectItem, Avatar } from "@nextui-org/react";
import React from "react";

const SelectConuntry = ({ register }) => {
    const [value, setValue] = React.useState("");

    const handleSelectionChange = (e) => {
      setValue(e.target.value);
    
    };
    console.log(value);
  return (
    <Select
      className="w-1/3 h-full mt-1"
      radius="sm"
      placeholder="Select"
      selectedKeys={[value]}
      onChange={handleSelectionChange}
    >
      <SelectItem
        key="codel"
        value={value}
        startContent={
          <Avatar
            alt="Argentina"
            className="w-3 h-3"
            src="https://flagcdn.com/ar.svg"
          />
        }
        {...register("codel", {
            required: true,
          })}
        
      >
        +58
      </SelectItem>
    </Select>
  );
};

export default SelectConuntry;
