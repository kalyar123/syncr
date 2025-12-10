"use client";

import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  Page,
  Sort,
  Filter,
  Selection,
  SelectionSettingsModel,
} from "@syncfusion/ej2-react-grids";
import {
  Home,
  FileText,
  Users,
  User,
  Mail,
  ClipboardList,
  Settings,
  MoreHorizontal,
} from "lucide-react";

import { data } from "./datasource";
// import { Search } from "lucide-react";

export default function Table() {
  const pageSettings = { pageSize: 8 };

  const selectionSettings: SelectionSettingsModel = {
    checkboxOnly: true,
    type: "Multiple",
  };

  return (
    <div className="w-full bg-white rounded-xl shadow border border-gray-300 p-4 space-y-1">
      <div className="flex justify-between items-center mt-3">
        <h1 className="text-lg font-semibold text-gray-500">Contracts</h1>
        <div className="flex gap-2 items-center">
          <Settings className="w-4 h-4" />
          <div className="bg-orange-500 p-2 rounded-full text-white ">
            <p className="w-4 h-4 flex items-center justify-center">R</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="md:flex items-center gap-4 p-2 flex flex-wrap">
          <button
            className="flex items-center gap-2 px-5 py-2 rounded-2xl text-sm 
                 bg-gray-100 border border-gray-200 text-gray-600 hover:bg-gray-200"
          >
            <Home className="w-4 h-4" />
            Templates
          </button>

          <button
            className="flex items-center gap-2 px-5 py-2 rounded-2xl text-sm 
                 bg-gray-100 border border-gray-200 text-gray-600 hover:bg-gray-200"
          >
            <FileText className="w-4 h-4" />
            Dashboard
          </button>

          <button
            className="flex items-center gap-2 px-5 py-2 rounded-2xl text-sm 
                 bg-gray-100 border border-gray-200 text-gray-600 hover:bg-gray-200"
          >
            <User className="w-4 h-4" />
            Contacts
          </button>

          <button
            className="flex items-center gap-2 px-5 py-2 rounded-2xl text-sm 
                 bg-gray-100 border border-gray-200 text-gray-600 hover:bg-gray-200"
          >
            <Users className="w-4 h-4" />
            Sellers
          </button>

          <button
            className="flex items-center gap-2 px-5 py-2 rounded-2xl text-sm 
                 bg-gray-100 border border-gray-200 text-gray-600 hover:bg-gray-200"
          >
            <Users className="w-4 h-4" />
            Customers
          </button>

          <button
            className="flex items-center gap-2 px-5 py-2 rounded-2xl text-sm 
                 bg-gray-100 border border-gray-200 text-gray-600 hover:bg-gray-200"
          >
            <Mail className="w-4 h-4" />
            Email Templates
          </button>

          <button
            className="flex items-center gap-2 px-5 py-2 rounded-2xl text-sm 
                 bg-gray-100 border border-gray-200 text-gray-600 hover:bg-gray-200"
          >
            <ClipboardList className="w-4 h-4" />
            Test Order Email
          </button>

          <button
            className="flex items-center gap-2 px-5 py-2 rounded-2xl text-sm font-medium
                 bg-orange-100 border border-orange-200 text-orange-600"
          >
            <i className="ri-clipboard-line text-base"></i>
            Contracts
          </button>
        </div>
        <MoreHorizontal className="md:w-4 md:h-4 w-8 h-8 text-gray-800" />
      </div>

      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
        {/* Search */}
        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-2 w-80 bg-white border rounded-lg px-3 py-2">
            {/* <Search className="w-4 h-4 text-gray-500" /> */}
            <input
              type="text"
              placeholder="Search Contract"
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>

          <button className="px-4 py-2 rounded-lg bg-gray-100 border text-gray-600 hover:bg-gray-200">
            Refresh
          </button>

          <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
            + Add Contract
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50">
            Delete Selection
          </button>

          <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">
            Columns
          </button>

          <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">
            Export
          </button>
        </div>
      </div>

      <GridComponent
        dataSource={data}
        allowSorting={true}
        allowFiltering={true}
        allowPaging={true}
        selectionSettings={selectionSettings}
        pageSettings={pageSettings}
        cssClass="modern-rounded-grid"
        height={420}
        rowHeight={52}
      >
        <ColumnsDirective>
          <ColumnDirective type="checkbox" width="60" textAlign="Center" />
          <ColumnDirective
            field="OrderID"
            headerText="Contract No."
            width="140"
            textAlign="Center"
          />

          <ColumnDirective field="CustomerID" headerText="Title" width="160" />

          <ColumnDirective
            field="EmployeeID"
            headerText="Customer"
            width="150"
          />

          <ColumnDirective
            field="ShipCountry"
            headerText="Lead From"
            width="150"
          />

          <ColumnDirective
            field="OrderDate"
            headerText="Start Date"
            width="120"
          />

          <ColumnDirective
            field="RequiredDate"
            headerText="End Date"
            width="120"
          />

          <ColumnDirective field="Freight" headerText="Value" width="120" />

          <ColumnDirective field="ShipCity" headerText="Status" width="150" />
        </ColumnsDirective>

        <Inject services={[Page, Sort, Filter, Selection]} />
      </GridComponent>

      {/* Empty State (when no contracts) */}
      {data.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-gray-500">
            {/* empty icon */}
            <span className="text-4xl">⌂</span>
          </div>

          <p className="mt-3 text-gray-700 font-medium text-lg">
            No Contracts Found
          </p>

          <p className="text-gray-500 text-sm">
            Get started by creating a new contract
          </p>

          <button className="mt-5 px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
            + Add new Contract
          </button>
        </div>
      )}
    </div>
  );
}
