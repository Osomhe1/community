/* eslint-disable no-unused-vars */

import React, { Fragment } from "react";
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
  Pagination,
  Avatar,
} from "@nextui-org/react";
import { VerticalDotsIcon } from "../../pages/tables/components/VerticalDotsIcon";
import { rejectedTableHeader, rejected_columns, status, statusColor, rejectedTableData } from "./data";
import { MdFilterList } from "react-icons/md";
import PropTypes from 'prop-types'

const RejectedHistoryTable = ({setCurrentUser,view }) => {


  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(
    new Set(rejectedTableHeader)
  );
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "date",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

   const viewUser=(user)=>{
  setCurrentUser(user)
  view()
  }

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return rejected_columns;

    return rejected_columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredOnboardings = [...rejectedTableData];

    if (hasSearchFilter) {
      filteredOnboardings = filteredOnboardings.filter((onboarding) =>
       onboarding.firstName.toLowerCase().includes(filterValue.toLowerCase())||onboarding.lastName.toLowerCase().includes(filterValue.toLowerCase())||onboarding.status.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== status.length
    ) {
      filteredOnboardings = filteredOnboardings.filter((onboarding) =>
        Array.from(statusFilter).includes(onboarding.status)
      );
    }

    return filteredOnboardings;
  }, [rejectedTableData, filterValue, statusFilter]);

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

  const formatDate = (date) => {
    const newDate = new Date(date);
    const dateFormatter = new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return dateFormatter.format(newDate);
  };

  const renderCell = React.useCallback((onboarding, columnKey) => {
    const cellValue = onboarding[columnKey];

    switch (columnKey) {
      case "s_n":
        return <p>{onboarding?._id}</p>;
      case "name":
        return <p>{`${onboarding.lastName} ${onboarding.firstName}`}</p>;
      case "staffNo":
        return (
          <p className="text-bold text-small capitalize">
            {formatDate(cellValue)}
          </p>
        );
      case "rejectedBy":
        return (
          <p className="text-bold text-small capitalize">
            {cellValue}
          </p>
        );
         case "dateRejected":
        return (
          <p className="text-bold text-small capitalize">
            {formatDate(cellValue)}
          </p>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColor[onboarding.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
         <div className="text-center">
          <Button onClick={()=>viewUser(onboarding)} size='sm' className='bg-[#00BCC2] font-medium text-white px-2' >View</Button>
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
        <Input
          isClearable
          className="w-full sm:max-w-[44%]"
          placeholder="Filter by name and status"
          startContent={  <MdFilterList size={20}
                            />}
          value={filterValue}
          onClear={() => onClear()}
          onValueChange={onSearchChange}
        />
        <div className="flex justify-between items-center">
          <span className="font-medium text-small">
            Total: {rejectedTableData.length} onboardings
          </span>
          <label className="flex items-center font-medium text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none font-medium text-small"
              onChange={onRowsPerPageChange}
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
    rejectedTableData.length,
    onSearchChange,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${filteredItems.length} selected`}
        </span>
        <Pagination
          isCompact
          showControls
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
    <Fragment>
        <Table
          aria-label="Example table with custom cells, pagination and sorting"
          isHeaderSticky
          bottomContent={bottomContent}
          bottomContentPlacement="outside"
          classNames={{
            wrapper: "max-h-[550px]",
          }}
          selectedKeys={selectedKeys}
          selectionMode="multiple"
          sortDescriptor={sortDescriptor}
          topContent={topContent}
          topContentPlacement="outside"
          onSelectionChange={setSelectedKeys}
          onSortChange={setSortDescriptor}
          className="lg:col-span-4"
        >
          <TableHeader columns={headerColumns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
                allowsSorting={column?.sortable}
                 className={`font-medium ${column.uid === "actions" && "text-center"}`}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody emptyContent={"No leave found"} items={sortedItems}>
            {(item) => (
              <TableRow key={item._id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
    </Fragment>
  );
};
export default RejectedHistoryTable;

RejectedHistoryTable.propTypes={
resume: PropTypes.func,
view: PropTypes.func,
setCurrentUser: PropTypes.func,
}
