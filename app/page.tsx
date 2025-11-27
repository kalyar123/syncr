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

import { data } from "./datasource";

export default function Home() {
  const pageSettings = { pageSize: 8 };

  // Enable checkbox selection
  const selectionSettings: SelectionSettingsModel = {
    checkboxOnly: true,
    type: "Multiple", // or remove the 'type' property if it's not needed
  };

  return (
    <div
      className="mt-10 p-6 rounded-3xl bg-white shadow-[0_2px_14px_rgba(0,0,0,0.07)] border border-gray-200
                "
    >
      {/* Table Header */}
      <div className="mb-5 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Invoices List</h2>
      </div>

      <div className="flex justify-center">
        <GridComponent
          dataSource={data}
          allowSorting={true}
          allowFiltering={true}
          allowPaging={true}
          selectionSettings={selectionSettings}
          pageSettings={pageSettings}
          cssClass="modern-rounded-grid"
          height={470}
          rowHeight={52}
        >
          <ColumnsDirective>
            {/* Checkbox Column */}
            <ColumnDirective type="checkbox" width="60" textAlign="Center" />

            <ColumnDirective
              field="OrderID"
              headerText="Invoice No"
              width="140"
              textAlign="Center"
            />

            <ColumnDirective
              field="CustomerID"
              headerText="Status"
              width="130"
              template={(props: any) => (
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    props.CustomerID === "Paid"
                      ? "bg-green-100 text-green-700"
                      : props.CustomerID === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {props.CustomerID}
                </span>
              )}
            />

            <ColumnDirective
              field="EmployeeID"
              headerText="Payment Method"
              width="150"
            />

            <ColumnDirective
              field="Freight"
              headerText="Amount"
              width="130"
              format="C2"
              textAlign="Right"
            />

            <ColumnDirective
              field="ShipCountry"
              headerText="Country"
              width="150"
            />
          </ColumnsDirective>

          <Inject services={[Page, Sort, Filter, Selection]} />
        </GridComponent>
      </div>
    </div>
  );
}
