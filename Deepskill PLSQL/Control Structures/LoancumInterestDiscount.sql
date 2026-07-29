SET SERVEROUTPUT ON;

DECLARE
    CURSOR customer_cursor IS
        SELECT customer_id, age, loan_interest_rate
        FROM customers;

BEGIN
    FOR customer IN customer_cursor LOOP

        IF customer.age > 60 THEN

            UPDATE customers
            SET loan_interest_rate = loan_interest_rate - 1
            WHERE customer_id = customer.customer_id;

            DBMS_OUTPUT.PUT_LINE(
                '1% discount applied to Customer ID '
                || customer.customer_id
            );

        END IF;

    END LOOP;

    COMMIT;

END;
/