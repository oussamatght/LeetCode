

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    let dummy = new ListNode(0); 
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry > 0) {

        let v1 = l1 ? l1.val : 0;  
        let v2 = l2 ? l2.val : 0;  

        let sum = v1 + v2 + carry;

        carry = Math.floor(sum / 10);      
        let digit = sum % 10;              

        current.next = new ListNode(digit);  
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
}

