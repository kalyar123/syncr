"use client";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  Page,
  Sort,
  Filter,
  Group,
  FilterSettingsModel,
} from "@syncfusion/ej2-react-grids";
import { data } from "./datasource";

export default function Home() {
  const pageSettings = { pageSize: 6 };
  const filterSettings: FilterSettingsModel = { type: "Excel" };

  return (
    <div className="mt-10 bg-white p-4 rounded-xl shadow-sm border border-gray-200">
      <GridComponent
        dataSource={data}
        allowGrouping={true}
        allowSorting={true}
        allowFiltering={true}
        allowPaging={true}
        pageSettings={pageSettings}
        filterSettings={filterSettings}
        height={400}
        cssClass="tw-grid-table"
      >
        <ColumnsDirective>
          <ColumnDirective field="OrderID" headerText="Invoice" width="120" />
          <ColumnDirective field="CustomerID" headerText="Status" width="120" />
          <ColumnDirective field="EmployeeID" headerText="Method" width="120" />
          <ColumnDirective
            field="Freight"
            headerText="Amount"
            width="120"
            format="C2"
          />
          <ColumnDirective
            field="ShipCountry"
            headerText="Country"
            width="120"
          />
        </ColumnsDirective>

        <Inject services={[Page, Sort, Filter, Group]} />
      </GridComponent>
    </div>
  );
}
