// Declare a module named "cb_pr_calculation".
declare module "cb_pr_calculation" {
	export interface SalaryCalculationResult {
	  basicSalary: number;
	  bonusAmount: number;
	  taxableAmount: number;
	  taxAmount: number;
	  netSalary: number;
	}

	export interface EmployeeBenefit {
		amount: number;
		isTaxable: boolean;
		offeredBy: "STAFF" | "ORGANIZATION";
		taxRate: number;
	}
 
	/**
	 * 
	 * @param basicSalary 
	 * @param bonusPercentage 
	 * @param taxPercentage 
	 */
	export function calculateSalary(
	  basicSalary: number,
	  bonusPercentage: number,
	  taxPercentage: number
	): SalaryCalculationResult;
	
	/**
	 * 
	 * @param basicSalary 
	 * @param workDayPerMonth
	 */
	export function calculateSalaryByHour(basicSalary: number, workDayPerMonth: number): number;

	/**
	 * 
	 * @param basicSalary 
	 * @param bonusPercentage 
	 */
	export function calculateBonus(basicSalary: number, bonusPercentage: number): number;

	/**
	 * 
	 * @param basicSalary 
	 */
	export function calculate13thMonth(basicSalary: number): number;
} 