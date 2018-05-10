<template>
  <div id="dashboard">
      <h3>Dashboard - {{employeesCount}} employees</h3>
        <ul class="collection with-header">
            <li class="collection-header">
                <h4>Employees</h4>
            </li>
            <li v-for="employee in employees" v-bind:key="employee.id" class="collection-item">
                <div class="chip">{{employee.dept}}</div>{{employee.employee_id}}:{{employee.name}}
                <i class="fa fa-trash" @click="deleteEmployee(employee.employee_id)"></i>
            </li>
        </ul>

        <div id="new-employee">
          <div class="row">
            <form @submit.prevent="addNewEmployee" class="col s12">
              <div class="row">
                <div class="input-field col s12">
                  <input type="text" v-model="employee_id" required>
                  <label>Employee ID#</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input type="text" v-model="name" required>
                  <label>Name</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input type="text" v-model="dept" required>
                  <label>Department</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input type="text" v-model="position" required>
                  <label>Position</label>
                </div>
              </div>
              <button type="submit" class="btn">Submit</button>
            </form>
          </div>
        </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'ViewEmployees',
  data() {
    return {
      employee_id: null,
      name: null,
      dept: null,
      position: null,
    };
  },
  computed: {
    ...mapState(['employees']),
    ...mapGetters(['employeesCount']),
  },
  methods: {
    addNewEmployee() {
      this.addEmployee({
        employee_id: this.employee_id,
        name: this.name,
        dept: this.dept,
        position: this.position,
      })
        .then(() => {
          this.clear();
        });
    },
    clear() {
      this.employee_id = null;
      this.name = null;
      this.dept = null;
      this.position = null;
    },
    ...mapActions([
      'getEmployees',
      'addEmployee',
      'deleteEmployee',
    ]),
  },
  created() {
    this.getEmployees();
  },
};
</script>
<style scoped>
  .fa.fa-trash {
    float: right;
    line-height: 2.5rem;
  }

  .fa.fa-trash:hover {
    cursor: pointer;
  }
</style>
