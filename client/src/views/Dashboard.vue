<template>
  <section >
    <b-tabs>
      <b-tab-item label="Table" style="padding:50px 0px">
        <b-table
          :data="data"
          :columns="columns"
          :checked-rows.sync="checkedRows"
          :is-row-checkable="row => true"
          :checkbox-position="left"
          checkable
        >
          
            <b>Total Checked</b>: {{ checkedRows.length }}
          

          <template v-for="column in columns">
            <b-table-column :key="column.id" v-bind="column" >
              <template
                v-if="column.searchable && !column.numeric"
                slot="searchable"
                slot-scope="props"
                
              >
                <b-input 
                  v-model="props.filters[props.column.field]"
                  placeholder="Search..."
                  size="is-small"
                  
                />
              </template>
              <template v-slot="props" >
                {{ props.row[column.field] }}
                
              </template>
            </b-table-column>
          </template>
        </b-table>
      </b-tab-item>

      <b-tab-item label="Selected" >
        <pre v-if="checkedRows.length > 0">{{ checkedRows }}</pre>
        <pre v-else>
          You have to select at least one user
        </pre>

      </b-tab-item>
    </b-tabs>
  </section>
</template>

<script>
import { context } from "@/models/context";
export default {
  data() {
    return {
      data: context.state.users,
      checkedRows: [],
      columns: [
        {
          field: "id",
          label: "ID#",
          width: "30",
          height: "100",
          numeric: true,
          searchable: true
        },
        {
          field: "name",
          label: "Full Name",
          searchable: true
        },
        {
          field: "handle",
          label: "Username",
          searchable: true
        },
        {
          field: "loggedIn",
          label: "Logged in?",
          searchable: true
        },
        {
          field: "admin",
          label: "Administrator",
          searchable: true
        }
      ]
    };
  }
};
</script>


<style scoped>

</style>