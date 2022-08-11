import React from 'react';
import Choose from '../Home/Choose/Choose';
import Client from '../Home/Client/Client';
import PageTitle from '../PageTitle/PageTitle';
import img from './../../Image/Page/5.png';
const PayrollServices = () => {
    return (
        <div>
            {/*  Payroll-Services*/}
            <PageTitle title='Payroll Services'></PageTitle>
            <section class="page-section  bg-light">
                <div class="container">
                    <div class="page-content">
                        <div class="page-content-image">
                            <img class="img-fluid" src={img} alt="" />
                        </div>
                        <div class="page-content-text mt-5">
                            <h2 class="page-content-title">Payroll Services</h2>
                            <p>
                                ACOUNTIER has been working on the US Payroll Processing for the number of years, ACOUNTIER has worked for up to 5000
                                Employees for different Clients across United States and across the Globe.
                            </p>
                            <p>
                                ACOUNTIER has a greater experience on Employee New Joining Process (W4- Federal and State Taxes), Employee Termination,
                                Payslip Generation, Attendance & Leave Management, 401K, Simple IRA, Insurance, Garnishments, UI Claims, Time Sheet
                                Management, Section 125 Compliance, Incentives, Commissions, bonus and 1099.
                            </p>
                            <h3>
                                ACOUNTIER provides the Payroll Services for the US based
                                Businesses as below,
                            </h3>
                            <p className='mb-2'>US Compliance : Quarterly And Yearly Returns, Legal Notices.</p>
                            <p className='mb-2'>Expense Management : Employees And Consultants Expense Management.</p>
                            <p className='mb-2'>Workers Compensation: Activation/Termination Of States With Insurance Company As Per Activation/Termination Of
                                Employees In The Company.</p>
                            <p className='mb-4'>U.S. Payroll Specialist : Activations, Terminations, Payslip Generation, Attendance And Leave Management, State And Federal
                                Taxes, 401K, Simple IRA, Insurance, Garnishments, UI Claims, Timesheet Management, Section 125 Compliance, Incentives, Commissions, Bonus And 1099.
                                Accounting Software : QuickBooks, ADP (Automatic Data Processing), Workday, Paycheck
                            </p>
                            <h3>EMPLOYEE SALARY CALCULATION</h3>
                            <p>
                                Our payroll specialists will operate complicated computations to modify benefits, reimbursement, and retirement payouts in the
                                salary. We use earnings tabulation software program to put off calculation blunders that come to be a trouble to restoration
                                manually.
                            </p>
                            <h3>PAYROLL REPORTING</h3>
                            <p>
                                If you want periodic payroll reviews to make monetary decisions, we will assist you get sorted with statistics and figures that
                                are analyzed the use of analytics software. We will function wide variety crunching to consolidate the findings into complete
                                reports with customizable views. In this way, you can remain updated about function changes, salary, attendance, time off,
                                tax responsibilities and liability.
                            </p>
                            <h3>COMPLIANCE WITH THE PAYROLL LAWS</h3>
                            <p>
                                If you are amongst agencies that are involved about determining wages, we will assist you remain compliant with the nice
                                compensation practices. We count number on our journey in serving hundreds of purchasers to endorse a compensation
                                approach special to your organization. We assist you spherical up the best abilities with aggressive compensation
                                compliant with labor laws.
                            </p>
                            <h3>MANAGEMENT OF EMPLOYEE LIFECYCLE</h3>
                            <p>
                                If you can't music and report the end-to-end path of your employee's time, we can deliver the proper know-how to the table.
                                Our payroll administration specialists will deal with documentation of your employee's tenure to make sure an easy onboarding
                                and exit process.
                            </p>
                            <h3>PAYROLL ADVISORY</h3>
                            <p>
                                Laws change, and so do widespread wages, so if you are short-staffed or underrepresented to cope with the modifications,
                                we have you covered. Our payroll advisory professionals will furnish records and information to assist you make higher decisions.
                            </p>
                            <h3>TAX PLANNING</h3>
                            <p>
                                If your personnel want instruction to retailer tax, we will aid them by means of recommending tax saving plans to restriction
                                money outflow. Wewill assist you provide deductions through amassing declarations from employees.
                            </p>
                            <h3>ATTENDANCE MANAGEMENT</h3>
                            <p>
                                Your managers can get notified about go away requests from personnel on a real-time basis. We can plan customized attendance
                                administration apps that let your personnel tune their requests thru a collaborative approach.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Choose></Choose>
            <Client></Client>
        </div>
    );
};

export default PayrollServices;