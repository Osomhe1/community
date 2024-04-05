
/* eslint-disable no-unused-vars */

import React from "react";
import PropTypes from 'prop-types'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
} from "@nextui-org/react";
import { PlusIcon } from "../../../tables/components/PlusIcon";
import { VerticalDotsIcon } from "../../../tables/components/VerticalDotsIcon";
import { SearchIcon } from "../../../tables/components/SearchIcon";
import { ChevronDownIcon } from "../../../tables/components/ChevronDownIcon";
import { statusOptions } from "../../Setting/Bank/data";
import { capitalize } from "../../../tables/components/utils";
import { PencilIcon } from "lucide-react";
import { HiOutlinePencil } from "react-icons/hi2";
import { useClassNames } from "../../../../utils/tableClassNames";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const columns = [
  {name: "Name", uid: "name", sortable: true},
  {name: "Code", uid: "code", sortable: true},
  {name: "Default", uid: "sort_no", sortable: true},
  {name: "Action", uid: "actions"},
];

const INITIAL_VISIBLE_COLUMNS = [
  "name",
  "code",
  "default",
  "actions",
];

const StaffGroupTable = ({handleOpenDrawer, rows}) => {
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "name",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredrows = [...rows];

    if (hasSearchFilter) {
      filteredrows = filteredrows.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredrows = filteredrows.filter((user) =>
        Array.from(statusFilter).includes(user.status)
      );
    }

    return filteredrows;
  }, [rows, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <p className="text-bold text-small whitespace-wrap">{cellValue}</p>
        );
      case "code":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small">{cellValue}</p>
          </div>
        );
      case "default":
        return <p className="text-bold text-small">{cellValue}</p>;
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="md" variant="">
                  <VerticalDotsIcon className="text-slate-600" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>
                  <Button className=" bg-lime-500 w-full text-white">
                    <HiOutlinePencil /> View Staff
                  </Button>
                </DropdownItem>
                {
                  cellValue==='No'?(
                <DropdownItem>
                  <Button
                    className=" bg-blue-500 w-full text-white"
                    endContent={<PencilIcon size={"2.5vh"} />}
                    onClick={handleOpenDrawer}
                  >
                    <HiOutlinePencil /> Delete
                  </Button>
                </DropdownItem>
                  ):null
                }
                <DropdownItem>
                  <Button
                    className=" bg-blue-500 w-full text-white"
                    startContent={<PencilIcon size={"2.5vh"} />}
                    onClick={()=>handleOpenDrawer({group: user, role: "edit"})}
                  > Update
                  </Button>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between flex-wrap items-center">
          <Input
            isClearable
            className="w-full py-3 sm:max-w-[44%]"
            placeholder="search here..."
            startContent={<SearchIcon />}
            value={filterValue}
            variant="bordered"
            onClear={() => onClear()}
            size="sm"
            onValueChange={onSearchChange}
          />
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
              value={rowsPerPage}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onRowsPerPageChange,
    rows.length,
    onSearchChange,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {
          selectedKeys.size===0?
          (<span className="text-default-400 text-small">
          Total {rows.length} Staff
        </span>) : (
          selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${filteredItems.length} selected`
          ) 
            }
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          classNames={{
            wrapper:
              "gap-0 overflow-visible h-full rounded-xl bg-transparent  shadow",
            item: "w-10 h-10 text-small rounded-none bg-transparent",
            active: "bg-red-500",
            cursor:
              "bg-btnColor shadow from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white font-bold",
          }}
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}
          >
            Previous
          </Button>
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);


  return (
    <Table
      aria-label="Example table with custom cells, pagination and sorting"
      isStriped
      showSelectionCheckboxes={true}
      // isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={useClassNames()}
      // selectedKeys={selectedKeys}
      // selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
            className="uppercase"
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No Staff found"} items={sortedItems}>
        {(item, index) => (
          <TableRow key={item._id}>
            {(columnKey) => (
              <TableCell className="">{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
export default StaffGroupTable;

StaffGroupTable.propTypes = {
  handleOpenDrawer: PropTypes.func,
  rows: PropTypes.array
}