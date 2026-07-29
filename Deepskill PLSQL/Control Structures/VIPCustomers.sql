SET SERVEROUTPUT ON;

DECLARE
    CURSOR customer_cursor IS
        SELECT customer_id, balance
        FROM customers;

BEGIN

    FOR customer IN customer_cursor LOOP

        IF customer.balance > 10000 THEN

            UPDATE customers
            SET IsVIP = 'TRUE'
            WHERE customer_id = customer.customer_id;

            DBMS_OUTPUT.PUT_LINE(
                'VIP status assigned to Customer ID '
                || customer.customer_id
            );

        END IF;

    END LOOP;

    COMMIT;

END;
/