CREATE OR REPLACE PROCEDURE TransferFunds(

    p_from_account IN NUMBER,
    p_to_account   IN NUMBER,
    p_amount       IN NUMBER

)

IS

    v_balance NUMBER;

BEGIN

    SELECT balance

    INTO v_balance

    FROM accounts

    WHERE account_id = p_from_account

    FOR UPDATE;

    IF v_balance >= p_amount THEN

        UPDATE accounts

        SET balance = balance - p_amount

        WHERE account_id = p_from_account;

        UPDATE accounts

        SET balance = balance + p_amount

        WHERE account_id = p_to_account;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Transfer Successful');

    ELSE

        DBMS_OUTPUT.PUT_LINE('Insufficient Balance');

    END IF;

END;
/