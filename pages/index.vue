<script lang="ts" setup>
    //init config
    const config = useRuntimeConfig();

    const totalEmployee = ref();
    const totalActiveEmployee = ref();
    const totalInActiveEmployee = ref();

    const errors  : any  = ref({});
    const employees  : any  = ref({});

    await $fetch(`${config.public.apiBase}/api/employee`,{
        method: "GET"
    }).then((data) => {
        employees.value = data;
        setTimeout(function(){
            $('#tblEmployee').DataTable();
        }, 1000);
    });

    await $fetch(`${config.public.apiBase}/api/employee/statistic`, {
        method: 'GET'
    }).then((data) => {
        totalEmployee.value = data.data.total;
        totalActiveEmployee.value = data.data.active;
        totalInActiveEmployee.value = data.data.inActive;
    }).catch((error) => {
        errors.value = error.data
        console.log(error.data);
    });

</script>

<template>
  <div class="sgx-title">
    <h1>Employee Database</h1>
  </div>
  <div class="sgx-stats">
      <div class="item">
          <div class="big-val">{{ totalEmployee }} <img src="/icons/chart-line-blue.svg" class="icon o10"></div>
          <div class="small-val font-size-11"><img src="/icons/users-dark.svg" class="inline-icon">Total Employees</div>
      </div>
      <div class="item">
          <div class="big-val text-success">{{ totalActiveEmployee }}</div>
          <div class="small-val font-size-11"><img src="/icons/users-dark.svg" class="inline-icon">Active Employees</div>
      </div>
      <div class="item">
          <div class="big-val text-danger">{{ totalInActiveEmployee }}</div>
          <div class="small-val font-size-11"><img src="/icons/users-dark.svg" class="inline-icon">Inactive Employees</div>
      </div>
  </div>
  <div class="sgx-table alt">
      <div class="options no-scrollbar">
          <a href="/employee/create" class="item">
              <img src="/icons/plus-dark.svg" class="icon">Register
          </a>
      </div>
      <div class="table-wrapper no-scrollbar">
          <table id="tblEmployee" class="table hoverable">
            <thead>
              <tr>
                  <th class="sgx-w-100">Name</th>
                  <th class="sgx-w-50">Status</th>
                  <th class="sgx-w-50">NIK</th>
                  <th class="sgx-w-50">Joined</th>
                  <th class="sgx-w-50">Srv Year</th>
                  <th class="sgx-w-50">Company</th>
                  <th class="sgx-w-100">Department</th>
              </tr>
            </thead>
            <tbody>
                <tr v-for="(employee, index) in employees.data" :key="index">
                    <td>{{ employee.full_name }}</td>
                    <td>{{ employee.status }}</td>
                    <td>{{ employee.nik }}</td>
                    <td>{{ employee.join_date }}</td>
                    <td>{{ employee.join_date }}</td>
                    <td>{{ employee.company.company_name }}</td>
                    <td>{{ employee.department.department_name }}</td>
                </tr>
            </tbody>
          </table>
      </div>
  </div>
</template>

<style scoped></style>
