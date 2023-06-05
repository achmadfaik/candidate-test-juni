<script lang="ts" setup>

    //meta title
    useHead({
        title: 'Pt Abc - Create Employee',
    });

    //init config
    const config = useRuntimeConfig();  

    //init router
    const router = useRouter();

    //define state
    const company       = ref('');
    const department    = ref('');
    const full_name     = ref('');
    const nik           = ref('');
    const join_date     = ref('');
    const dob           = ref('');
    const status        = ref('');

    var showModal = false;

    const errorsPost  : any  = ref({});

    //fetch daa for get detail data post
    const { data: mstCompany } : any = await useFetch(`${config.public.apiBase}/api/mst-company`);
    const { data: mstDepartment } : any = await useFetch(`${config.public.apiBase}/api/mst-department`);

    const storeEmployee = async () => {
        // showModal = true
        let formData = new FormData();

        //assign state value to formData
        formData.append('company_id', company.value);
        formData.append('department_id', department.value);
        formData.append('full_name', full_name.value);
        formData.append('nik', nik.value);
        formData.append('join_date', join_date.value);
        formData.append('dob', dob.value);
        formData.append('status', status.value);

        await $fetch(`${config.public.apiBase}/api/employee`, {
            method: 'POST',
            body: formData
        })
        .then((data) => {
            router.push({ path: "/" });
        })
        .catch((error) => {
            console.log(error);
            errorsPost.value = "Terjadi kesalahan pada server"
        });
    }
</script>

<template>
    <div class="sgx-title">
        <h1><a href="/"><img src="/icons/arrow-left-blue.svg" class="separate back"></a> </h1>
    </div>

    <Form @submit="storeEmployee" v-slot="{ errors }">
        <div class="sgx-table">
            <div class="form-about">
                Employee Information
            </div>
            <div class="table-wrapper">
                <table class="table">
                    <thead>
                        <tr>
                            <th colspan="99">Work Information</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="sgx-w-200 cell-title">Company</td>
                            <td class="sgx-w-300 input-td">
                                <Field name="company" v-model="company" as="select" :rules="isRequired">
                                    <option v-for="company in mstCompany.data" :value="company.id">
                                        {{ company.company_code + " - " + company.company_name }}
                                    </option>
                                </Field>
                            </td>
                            <td><em class="o5">{{ errors.company }}</em></td>
                        </tr>
                        <tr>
                            <td class="sgx-w-200 cell-title">Department</td>
                            <td class="sgx-w-300 input-td">
                                <Field name="department" v-model="department" as="select" :rules="isRequired">
                                    <option v-for="department in mstDepartment.data" :value="department.id">
                                        {{ department.department_name }}
                                    </option>
                                </Field>
                            </td>
                            <td><em class="o5">{{ errors.department }}</em></td>
                        </tr>
                        <tr>
                            <td class="sgx-w-200 cell-title">Name</td>
                            <td class="sgx-w-300 input-td">
                                <Field name="full_name" type="text" v-model="full_name" :rules="isRequired" />
                            </td>
                            <td><em class="o5">{{ errors.full_name }}</em></td>
                        </tr>
                        <tr>
                            <td class="sgx-w-200 cell-title">NIK</td>
                            <td class="sgx-w-300 input-td">
                                <Field name="nik" type="text" v-model="nik" :rules="isRequired" />
                            </td>
                            <td><em class="o5">{{ errors.nik }}</em></td>
                        </tr>
                        <tr>
                            <td class="sgx-w-200 cell-title">Status</td>
                            <td class="sgx-w-300 input-td">
                                <Field name="status" v-model="status" as="select" :rules="isRequired">
                                    <option value="Active">Active</option>
                                    <option value="InActive">InActive</option>
                                </Field>
                            </td>
                            <td><em class="o5">{{ errors.status }}</em></td>
                        </tr>
                        <tr>
                            <td class="sgx-w-200 cell-title">Join Date</td>
                            <td class="sgx-w-300 input-td">
                                <Field name="join_date" type="date" v-model="join_date" :rules="isRequired"/>
                            </td>
                            <td><em class="o5">{{ errors.join_date }}</em></td>
                        </tr>
                        <tr>
                            <td class="sgx-w-200 cell-title">Date of Birth</td>
                            <td class="sgx-w-300 input-td">
                                <Field name="dob" type="date" v-model="dob" :rules="isRequired"/></td>
                            <td><em class="o5">{{ errors.dob }}</em></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="sgx-form">
            <div class="form-section brd-bottom brd-top">
                <div class="form-group mb-0">
                    <button type="submit" class="btn btn-sea hms-btn add-spinner white-spinner pop">Save</button>
                    &nbsp;<em class="o5">{{ errorsPost }}</em>
                </div>
            </div>
        </div>
    </form>
    <SavedModal v-show="true" @close-modal="showModal = false" />
</template>

<style scoped></style>
<script lang="ts">
    import { Field, Form } from 'vee-validate';
    import SavedModal from '@/components/layouts/modals.vue'

    export default {
        components: {
            Field,
            Form,
            SavedModal
        },
        methods: {
            isRequired(value) {
                return value ? true : 'This field is required';
            },
        },
    };
</script>