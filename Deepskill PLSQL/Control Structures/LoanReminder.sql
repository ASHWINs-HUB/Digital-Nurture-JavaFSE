SET SERVEROUTPUT ON;

DECLARE

    CURSOR loan_cursor IS
        SELECT customer_id,
               loan_id,
               due_date
        FROM loans
        WHERE due_date BETWEEN SYSDATE
                          AND SYSDATE + 30;

BEGIN

    FOR loan IN loan_cursor LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Customer '
            || loan.customer_id
            || ' has Loan '
            || loan.loan_id
            || ' due on '
            || loan.due_date
        );

    END LOOP;

END;
/