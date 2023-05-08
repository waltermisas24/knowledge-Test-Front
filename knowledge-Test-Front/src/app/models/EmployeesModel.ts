import { DataEmployeeModel } from "./DataEmployeeModel";

export interface EmployeesModel{
    status: string,
    data: DataEmployeeModel[],
    message: string
}
