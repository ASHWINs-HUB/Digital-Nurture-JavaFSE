CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(

    p_department IN VARCHAR2,
    p_bonus      IN NUMBER

)

IS

BEGIN

    UPDATE employees

    SET salary = salary + (salary * p_bonus / 100)

    WHERE department = p_department;

    COMMIT;

END;
/