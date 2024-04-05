/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import FormElement from "./FormElement";
import { CiCircleRemove } from "react-icons/ci";
import {
  Button,
  Checkbox,
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Input } from "antd";
import { FaPlus } from "react-icons/fa6";
import { formatError } from "../../../../utils/messagePopup";
import { useForm } from "react-hook-form";

const nonPlaceholderElement = ["checkbox", "radio", "button"];

const optionsElement = ["radio", "select", "checkbox"];
const nonRequiredElement = ["header", "paragraph", "submit"];

const elementItems = [
  { name: "Paragraph", type: "paragraph", label: "Add your paragraph here" },
  { name: "Header", type: "header", label: "header text" },
  { name: "Add Text Field", type: "text", label: "Add Text Field" },
  { name: "Add TextArea", type: "textarea", label: "Textarea" },
  // { name: "File Upload", type: "file", label: "Add file" },
  {
    name: "Checkbox",
    type: "checkbox",
    label: "Checkbox",
    options: [
      { value: "1", label: "Checkbox 1" },
      { value: "2", label: "Checkbox 2" },
      { value: "3", label: "Checkbox 3" },
    ],
  },
  {
    name: "Radio",
    type: "radio",
    label: "Radio",
    options: [
      { value: "1", label: "Radio 1" },
      { value: "2", label: "Radio 2" },
      { value: "3", label: "Radio 3" },
    ],
  },
  { name: "Rate", type: "rate", label: "Rating" },
  {
    name: "Add Select",
    type: "select",
    label: "Select",
    options: [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
    ],
  },
  { name: "Button", type: "submit", label: "Submit" },
];

const FormBuilder = ({ role }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formElements, setFormElements] = useState([]);
  const [type, setType] = useState("text");
  const [label, setLabel] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [optionLabel, setOptionLabel] = useState("");
  const [optionValue, setOptionValue] = useState("");
  const [wantToEdit, setWantToEdit] = useState(false);
  const [elementToEditIndex, setElementToEditIndex] = useState({});
  const [options, setOptions] = useState([]);
  const [isRequired, setIsRequired] = useState(false);

  const { register, handleSubmit, control, setValue } = useForm();

  // submit the form here
  const handleSubmitFn = (values) => {
    // Handle form submission logic here
    console.log(values);
  };
  // save the form here
  const handleSaveFn = (values) => {
    // Handle form save here
    console.log(formElements);
    console.log(values);
  };

  const addElement = (type, label, options) => {
    let elementKey = label.toLowerCase().split(" ").join("_");

    const isElementKeyPresent = formElements?.some(
      (elementItems) => elementItems?.elementKey === elementKey
    );
    if (isElementKeyPresent) {
      formatError(
        "This label name already existed, two element can not have the same label name"
      );
    } else {
      setFormElements((prevState) => [
        ...prevState,
        { type, label, elementKey, options, placeholder, isRequired },
      ]);
      setIsRequired(false);
    }
  };

  const editElement = (index, element) => {
    setElementToEditIndex(index);
    setWantToEdit(true);
    setType(element.type);
    setLabel(element.label);
    setPlaceholder(element.placeholder);
    setOptions(element.options);
    setIsRequired(element?.isRequired);
    onOpen();
  };

  const removeElement = (index) => {
    setFormElements((prevState) => prevState.filter((_, i) => i !== index));
  };

  // function to open modal
  const handleOpenModal = (type) => {
    setType(type);
    onOpen();
  };

  const handleCloseModal = (action) => {
    if (action === "edit") {
      //This will edit
      let elementKey = label.toLowerCase().split(" ").join("_");
      let editedItemIndex = formElements.findIndex(item=>item.elementKey === elementKey);
      const isElementKeyPresent = formElements?.some(
        (elementItems) => elementItems?.elementKey === elementKey
      );
      if (isElementKeyPresent && editedItemIndex !== elementToEditIndex) {
        formatError(
          "This label name already existed, two element can not have the same label name"
        );
      } else {
        formElements[elementToEditIndex] = {
          type,
          label,
          options,
          elementKey,
          placeholder,
          isRequired
        };
        setFormElements(formElements);
        setWantToEdit(false);
        setLabel("");
        setPlaceholder("");
        setOptions([]);
        setIsRequired(false);
        onClose();
      }
    } else {
      if (label === "") {
        formatError("Label can not be empty");
      } else {
        addElement(type, label, options, isRequired);
        setLabel("");
        setPlaceholder("");
        setOptions([]);
        setIsRequired(false);
        onClose();
      }
    }
  };

  //add options function
  const addOptions = () => {
    const value = optionLabel?.toLowerCase().split(" ").join("_");
    setOptions([...options, { id: options.length, label: optionLabel, value }]);
    setOptionLabel("");
    setOptionValue("");
  };

  //remove options
  const handleRemoveOption = (optionToRemove) => {
    setOptions(options?.filter((option) => option !== optionToRemove));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(role === "edit" ? handleSubmitFn : handleSaveFn)}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <div className="col-span-3">
          {formElements?.length ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {formElements.map((element, index) => (
                  <div
                    key={index}
                    className={
                      ["submit", "header", "paragraph", "textarea"].includes(
                        element.type
                      )
                        ? "col-span-2"
                        : ""
                    }
                  >
                    <FormElement
                      componentRole={role}
                      setValue={setValue}
                      register={register}
                      control={control}
                      element={element}
                      {...element}
                      removeElementFn={() => removeElement(index)}
                      editElementFn={() => editElement(index, element)}
                    />
                  </div>
                ))}
              </div>
              {role === "edit" ? (
                ""
              ) : (
                <Button type="button" onClick={handleSaveFn} className="my-3" radius="sm" size={"sm"}>
                  Save
                </Button>
              )}
            </>
          ) : (
            <div className="flex justify-center items-center h-[30rem] border border-dashed border-2">
              <p className="text-2xl text-gray-500">No form elements added</p>
            </div>
          )}
        </div>
        <div className="col-span-1 flex flex-col gap-2">
          {elementItems.map((element, index) => (
            <button
              key={index}
              type="button"
              className="h-10 border rounded"
              onClick={() => {
                handleOpenModal(element.type);
              }}
            >
              {element.name}
            </button>
          ))}
        </div>
      </form>

      <Modal
        size={"xl"}
        isOpen={isOpen}
        onClose={onClose}
        // backdrop="blur"
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Provide Information for this element
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label>Element Label</label>
                    <Input
                      value={label}
                      onChange={(e) => setLabel(e.target.value)}
                      size="large"
                    />
                    {
                      nonRequiredElement?.includes(type) ? "" : (
                      <div className="mt-2">
                        <Checkbox isSelected={isRequired} onChange={(e)=>setIsRequired(e.target.checked)}>Required</Checkbox>
                      </div>
                      )
                    }
                  </div>
                  {/* {!nonPlaceholderElement?.includes(type) ? (
                    <div className="flex flex-col">
                      <label>Placeholder</label>
                      <Input
                        value={placeholder}
                        onChange={(e) => setPlaceholder(e.target.value)}
                        size="large"
                      />
                    </div>
                  ) : (
                    ""
                  )} */}

                  {optionsElement?.includes(type) ? (
                    <div className="col-span-2 flex flex-col">
                      <label htmlFor="options" className="font-semibold">
                        Add Options*
                      </label>
                      {
                        //input to add options here}
                      }
                      <div className="flex gap-2 flex-wrap">
                        {options?.length
                          ? options?.map((option, index) => (
                              <Chip
                                key={index + "_" + option?.label}
                                onClose={() => handleRemoveOption(option)}
                                variant="flat"
                              >
                                {option.label}
                              </Chip>
                            ))
                          : ""}
                      </div>

                      <div className="flex space-x-4">
                        <div>
                          <label htmlFor="">Option Label</label>
                          <Input
                            type="text"
                            size="large"
                            value={optionLabel}
                            onChange={(e) => setOptionLabel(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="my-3">
                        <Button
                          onClick={addOptions}
                          size="sm"
                          className="w-20 bg-orange-300 text-white"
                          startContent={<FaPlus size={"1rem"} />}
                        >
                          Add
                        </Button>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  onPress={() => handleCloseModal(wantToEdit ? "edit" : "")}
                >
                  {wantToEdit ? "Edit" : "Add Element"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default FormBuilder;
