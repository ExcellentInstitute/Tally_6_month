// tally-pro-data.js
// Excellent Institute - Advanced Tally Prime 7.0 & Accounting Professional Course
// BATCH 1: Accounting Foundations & Introduction to Tally

// Initialize the master array (Do this ONLY once at the very top of the file)
const tallyProBookData = [];

// ==========================================
// MODULE 1: THE ABSOLUTE FOUNDATION OF ACCOUNTING
// ==========================================
tallyProBookData.push({
    id: "module1",
    title: "Module 1: The Absolute Foundation of Accounting",
    topics: [
        {
            heading: "What is Accounting & Why Do We Need It?",
            text: `Imagine a shopkeeper who buys goods, sells them, pays rent, and pays salaries. If he relies only on his memory, he will eventually forget who owes him money or how much he spent. <br><br>
            <strong>Accounting is the language of business.</strong> It is the art of systematically <em>Recording</em> (writing down), <em>Classifying</em> (grouping similar items), and <em>Summarizing</em> financial transactions. <br><br>
            The ultimate goals of accounting are:<br>
            1. To find out if the business is making a <strong>Profit or a Loss</strong> at the end of the year.<br>
            2. To show the exact <strong>Financial Position</strong> (how much the business owns vs. how much it owes).`,
            shortcut: "Accounting replaces human memory with permanent, mathematically proven records.",
            imgSrc: "images/T1.png"
        },
        {
            heading: "The Business Entity Concept",
            text: `Before you touch a keyboard, you must understand the most important rule in accounting: <strong>The Business and the Owner are two completely separate people.</strong><br><br>
            If Rahul starts "Rahul Electronics", the accounting is done for the <em>shop</em>, not for Rahul. <br>
            - When Rahul puts his own money into the shop cash box, the shop treats Rahul as a lender. This money is called <strong>Capital</strong>.<br>
            - If Rahul takes ₹500 from the shop's cash box to buy a birthday gift for his son, it is not a business expense. It is recorded as <strong>Drawings</strong> (money withdrawn for personal use).`,
            shortcut: "Always think from the perspective of the Business, never from the perspective of the Owner.",
            imgSrc: "images/T2.png"
        },
        {
            heading: "Crucial Accounting Vocabulary (Part 1)",
            text: `To use Tally, you must speak its language fluently. Memorize these terms:<br><br>
            <ul>
                <li><strong>Assets:</strong> Anything valuable that the business OWNS. (e.g., Cash, Bank Balance, Computers, Furniture, Land).</li>
                <li><strong>Liabilities:</strong> Any money that the business OWES to outsiders. (e.g., Bank Loans, Unpaid Bills).</li>
                <li><strong>Goods / Stock:</strong> The specific items a business buys <em>only to resell</em> for profit. If a mobile shop buys a Samsung phone, it is 'Goods'. If they buy an AC for their office wall, it is an 'Asset'.</li>
            </ul>`,
            shortcut: "Assets put money in your pocket. Liabilities take money out of your pocket.",
            imgSrc: "images/T3.png"
        },
        {
            heading: "Crucial Accounting Vocabulary (Part 2)",
            text: `The concepts of Debtors and Creditors confuse many beginners. Let's make it simple:<br><br>
            <ul>
                <li><strong>Sundry Debtors (Customers):</strong> A person who buys goods from you on <em>credit (udhaar)</em>. They OWE you money. Debtors are your Assets because they will give you cash in the future.</li>
                <li><strong>Sundry Creditors (Suppliers):</strong> A person from whom you buy goods on <em>credit (udhaar)</em>. You OWE them money. Creditors are your Liabilities because you must pay them in the future.</li>
            </ul>`,
            shortcut: "Debtors = People who give us money later. Creditors = People we give money to later.",
            imgSrc: "images/T4.png"
        }
    ]
});

// ==========================================
// MODULE 2: THE GOLDEN RULES OF ACCOUNTING
// ==========================================
tallyProBookData.push({
    id: "module2",
    title: "Module 2: The Golden Rules of Accounting",
    topics: [
        {
            heading: "The Double Entry System",
            text: `Every action has an equal and opposite reaction. In accounting, this is called the <strong>Double Entry System</strong>. Every single transaction in a business involves exactly two sides:<br><br>
            One side is the <strong>Debit (Dr.)</strong> and the other side is the <strong>Credit (Cr.)</strong>. They must always equal the exact same mathematical amount.<br>
            <em>Example:</em> If you buy a Computer for ₹50,000 cash. Two things happen:<br>
            1. A Computer comes into the business.<br>
            2. ₹50,000 Cash goes out of the business.`,
            shortcut: "Debit and Credit are just left and right sides of a ledger. They have no meaning until we apply the Golden Rules.",
            imgSrc: "images/T5.png"
        },
        {
            heading: "Rule 1: Real Accounts (Assets & Properties)",
            text: `<strong>What is it?</strong> Real accounts deal with tangible things you can touch or feel. Examples: Cash Account, Furniture Account, Computer Account, Building Account.<br><br>
            <div style="background:#ecfdf5; padding:15px; border-radius:8px; border-left:4px solid #10b981; margin:15px 0;">
                <strong>THE RULE:</strong><br>
                Debit what comes in.<br>
                Credit what goes out.
            </div>
            <em>Example:</em> Bought Furniture for Cash.<br>
            - Furniture comes in 👉 Debit Furniture A/c.<br>
            - Cash goes out 👉 Credit Cash A/c.`,
            shortcut: "If you can physically touch it and it belongs to the business, it is a Real Account.",
            imgSrc: "images/T6.png"
        },
        {
            heading: "Rule 2: Personal Accounts (People & Companies)",
            text: `<strong>What is it?</strong> Personal accounts deal with the names of actual humans, artificial companies, or institutions. Examples: Rahul's A/c, Excellent Institute A/c, SBI Bank A/c, Tata Motors A/c.<br><br>
            <div style="background:#ecfdf5; padding:15px; border-radius:8px; border-left:4px solid #10b981; margin:15px 0;">
                <strong>THE RULE:</strong><br>
                Debit the Receiver.<br>
                Credit the Giver.
            </div>
            <em>Example:</em> Paid ₹10,000 Cash to Rahul.<br>
            - Rahul is receiving the cash 👉 Debit Rahul A/c.<br>
            - (Cash is going out, so applying the Real rule) 👉 Credit Cash A/c.`,
            shortcut: "Bank Accounts are Personal Accounts because a Bank is an artificial legal person receiving or giving your money.",
            imgSrc: "images/T7.png"
        },
        {
            heading: "Rule 3: Nominal Accounts (Incomes & Expenses)",
            text: `<strong>What is it?</strong> Nominal accounts deal with invisible concepts representing money spent or earned. Examples: Salary A/c, Rent Paid A/c, Commission Received A/c, Discount Allowed A/c.<br><br>
            <div style="background:#ecfdf5; padding:15px; border-radius:8px; border-left:4px solid #10b981; margin:15px 0;">
                <strong>THE RULE:</strong><br>
                Debit all Expenses and Losses.<br>
                Credit all Incomes and Gains.
            </div>
            <em>Example:</em> Paid Office Rent of ₹5,000 by Cash.<br>
            - Rent is an expense 👉 Debit Rent A/c.<br>
            - Cash goes out 👉 Credit Cash A/c.`,
            shortcut: "If you cannot touch it, and it just represents a reason why money moved, it is a Nominal Account.",
            imgSrc: "images/T8.png"
        }
    ]
});

// ==========================================
// MODULE 3: THE ACCOUNTING CYCLE
// ==========================================
tallyProBookData.push({
    id: "module3",
    title: "Module 3: The Accounting Cycle",
    topics: [
        {
            heading: "Step 1: Journal Entries (Original Entry)",
            text: `In traditional accounting, a Journal is a daily diary. Every transaction is written here first in chronological (date-wise) order using the Debit/Credit rules.<br><br>
            A proper manual journal entry looks like this:<br>
            <strong>Date:</strong> 01-April-2024<br>
            <strong>Particulars:</strong><br>
            &nbsp;&nbsp;&nbsp;Rent A/c ............... Dr. 5,000<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To Cash A/c ......... Cr. 5,000<br>
            <em>(Narration: Being office rent paid in cash)</em>`,
            shortcut: "The Narration is a short English sentence written under the entry to explain what happened.",
            imgSrc: "images/T9.png"
        },
        {
            heading: "Step 2: Ledger Posting",
            text: `If the boss asks, "How much total rent did we pay this year?", looking through a 500-page daily Journal is impossible. <br><br>
            Therefore, we transfer data from the Journal into a <strong>Ledger</strong>. A Ledger is a separate, dedicated T-shaped book for one specific item (e.g., a 'Rent Ledger' page, a 'Cash Ledger' page). All Rent entries from the entire year are gathered onto the Rent Ledger page so you can instantly see the total balance.`,
            shortcut: "A Ledger classifies scattered daily transactions into organized individual folders.",
            imgSrc: "images/T10.png"
        },
        {
            heading: "Step 3: Trial Balance & Final Accounts",
            text: `<strong>Trial Balance:</strong> At the end of the year, we list the final balances of every single ledger on one sheet of paper. If we followed the Double Entry system correctly, the total Debits will perfectly match the total Credits.<br><br>
            <strong>Final Accounts:</strong><br>
            - <em>Trading A/c:</em> Calculates Gross Profit (Sales minus Purchase cost).<br>
            - <em>Profit & Loss A/c:</em> Subtracts indirect expenses (Salaries, Rent) to find the Net Profit.<br>
            - <em>Balance Sheet:</em> A final statement showing the business's Assets on the right and Liabilities on the left.`,
            shortcut: "Why do we use Tally? In Tally, you ONLY do Step 1 (Voucher Entry). Tally instantly and automatically creates the Ledgers, Trial Balance, and Final Accounts without any math!",
            imgSrc: "images/T11.png"
        }
    ]
});

// ==========================================
// MODULE 4: ENTERING THE DIGITAL WORLD (TALLY PRIME)
// ==========================================
tallyProBookData.push({
    id: "module4",
    title: "Module 4: Basics of Tally Prime 7.0",
    topics: [
        {
            heading: "Overview of Tally ERP 9 vs Tally Prime",
            text: `For years, accountants used 'Tally ERP 9'—the famous software with a bright blue screen. However, business became more complex. <br><br>
            <strong>Tally Prime 7.0</strong> is the modern, color-optimized successor. <br>
            - It introduces a top-menu navigation bar (like Microsoft Word).<br>
            - It allows seamless multitasking. You can stop in the middle of a bill, check a report, and return without losing data.<br>
            - Under the hood, Prime 7.0 is heavily upgraded to handle complex modern GST compliance, e-Way bills, and WhatsApp invoice sharing automatically.`,
            shortcut: "Tally Prime is designed to be fully operated using a keyboard. Reaching for a mouse slows down a professional accountant.",
            imgSrc: "images/T12.png"
        },
        {
            heading: "Educational Mode vs. Licensed Mode",
            text: `Because Tally is a professional software, it costs thousands of rupees to buy a 'Licensed Mode' serial key. However, Tally provides a free <strong>Educational Mode</strong> for students to learn.<br><br>
            <strong>What is the exact difference?</strong><br>
            In Educational Mode, you have 100% access to every single feature (GST, Payroll, Printing, Balance Sheets). The <em>only</em> restriction is the Date. You can only record transactions on the <strong>1st, 2nd, and 31st</strong> of any month. You cannot enter a bill dated the 15th. For a student, this is perfectly fine!`,
            shortcut: "When you open Tally, always click 'Continue in Educational Mode' (or press 'T' on your keyboard).",
            imgSrc: "images/T13.png"
        },
        {
            heading: "Installation and The First Screen",
            text: `You can download the setup file for free from <em>tallysolutions.com</em>. Once installed, double-click the Tally Prime icon.<br><br>
            <strong>The Top Menu Bar:</strong> This is a new feature in Prime. It contains universal commands that you can access from anywhere in the software by pressing the 'Alt' key. <br>
            - Company (Alt+K)<br>
            - Data (Alt+Y)<br>
            - Exchange (Alt+Z)<br>
            - Go To (Alt+G)<br>
            - Print (Alt+P)<br>
            - Help (F1)`,
            shortcut: "Notice the underline under the letter 'K' in the top menu? A single underline in Tally means 'Press Alt'. A double underline means 'Press Ctrl'.",
            imgSrc: "images/T14.png"
        },
        {
            heading: "The Gateway of Tally & Navigation Secrets",
            text: `The <strong>Gateway of Tally</strong> is your central dashboard. It is divided into Masters (for creating data), Transactions (for daily entries), Utilities, and Reports.<br><br>
            Master these keyboard navigation secrets:<br>
            - <strong>Alt + G (Go To):</strong> The magic search bar. Jump to any report instantly.<br>
            - <strong>Escape (Esc):</strong> The 'Back' button. Press it multiple times to return to the Gateway of Tally from any deep menu.<br>
            - <strong>Enter:</strong> To go inside a menu or accept a line.<br>
            - <strong>Ctrl + A:</strong> The 'Quick Save' button. Instantly accept and save any screen without pressing 'Enter' twenty times.`,
            shortcut: "Never use the 'X' at the top right to close Tally. Go to the Gateway, press 'Escape', and press 'Y' to quit safely without corrupting data.",
            imgSrc: "images/T15.png"
        }
    ]
});
// ==========================================
// BATCH 2: Company Setup, Vouchers, & Inventory
// ==========================================

// ==========================================
// MODULE 5: COMPANY CREATION & LEDGER MANAGEMENT (MONTH 2)
// ==========================================
tallyProBookData.push({
    id: "module5",
    title: "Module 5: Company Creation & Ledger Management",
    topics: [
        {
            heading: "Company Configuration Options (F11)",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                <strong>📅 Month 2 Target (Days 36-39):</strong> Understand how to turn business features on and off in the software engine.
            </div>
            As soon as you create and save a company (Alt+K > Create), the <strong>F11 Features</strong> screen appears. Here you define the exact operations of your business.<br><br>
            - <strong>Accounting:</strong> Set 'Maintain Accounts' to Yes.<br>
            - <strong>Inventory:</strong> If it is a product-selling shop, set 'Maintain Inventory' to Yes, and 'Integrate Accounts with Inventory' to Yes.<br>
            - <strong>Taxation:</strong> Enable GST, TDS, or TCS if applicable.<br>
            - <strong>Payroll:</strong> Enable if you plan to manage employee salaries through Tally.
            <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 36-39)</h4>
                <ul>
                    <li><strong>Day 36-39:</strong> Press F11. Disable Inventory and Taxation. Look at the Gateway of Tally and document which menus disappeared. Then, re-enable them and document the changes.</li>
                </ul>
            </div>`,
            shortcut: "You can press F11 from the Gateway of Tally at any point in the future to turn these features on or off.",
            imgSrc: "images/T16.png"
        },
        {
            heading: "Understanding Group Hierarchy",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                <strong>📅 Month 2 Target (Days 40-44):</strong> Master the 28 pre-defined Tally Groups to ensure accurate Balance Sheets.
            </div>
            Tally operates on a strict Group Hierarchy. There are 28 Pre-defined Groups (15 Primary, 13 Sub-groups). Placing a ledger in the wrong group will completely ruin the Balance Sheet.<br><br>
            <strong>Key Groups to Memorize:</strong><br>
            - <em>Sundry Debtors:</em> Customers you sell to (Current Assets).<br>
            - <em>Sundry Creditors:</em> Suppliers you buy from (Current Liabilities).<br>
            - <em>Fixed Assets:</em> Computers, Land, Furniture owned by the business.<br>
            - <em>Indirect Expenses:</em> Office Rent, Staff Salary, Electricity Bill.<br>
            - <em>Duties & Taxes:</em> All GST, TDS, and Tax ledgers.
            <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 40-44)</h4>
                <ul>
                    <li><strong>Day 40-44:</strong> You will be given a list of 100 random business ledgers. In Tally, assign each of the 100 ledgers to their exact correct Group without looking at a cheat sheet.</li>
                </ul>
            </div>`,
            shortcut: "Gateway of Tally > Chart of Accounts > Groups (To view the entire tree structure).",
            imgSrc: "images/T17.png"
        },
        {
            heading: "Creating Ledgers & Assigning Opening Balances",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                <strong>📅 Month 2 Target (Days 45-50):</strong> Learn to migrate old paper business data into Tally accurately.
            </div>
            Go to <strong>Gateway of Tally > Create > Ledger</strong>.<br>
            Type 'Sales A/c' under Sales Accounts, 'SBI Bank' under Bank Accounts, etc.<br><br>
            <strong>Opening Balances:</strong> If you are switching an existing business to Tally, you must enter their current financial position as Opening Balances. Go to Alter > Ledger. Select the 'Cash' ledger, and at the bottom, type the exact cash available in the shop today. Ensure Tally marks Assets as 'Dr' and Liabilities as 'Cr'. A mismatch creates a 'Difference in Opening Balances' error in the Balance Sheet.
            <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 45-50)</h4>
                <ul>
                    <li><strong>Day 45-48:</strong> Create 30 specific Ledgers in Tally. Alter the default 'Cash' and 'Profit & Loss' ledgers.</li>
                    <li><strong>Day 49-50:</strong> Input 10 specific Opening Balances from a provided paper Balance Sheet. Check your digital Balance Sheet to ensure the "Difference in Opening Balances" is exactly zero.</li>
                </ul>
            </div>`,
            shortcut: "You can enter multiple opening balances rapidly from Gateway > Chart of Accounts > Ledgers > Press Alt+H (Multi Masters) > Multi Alter.",
            imgSrc: "images/T18.png"
        }
    ]
});

// ==========================================
// MODULE 6: VOUCHER ENTRY IN TALLY (MONTH 3)
// ==========================================
tallyProBookData.push({
    id: "module6",
    title: "Module 6: Voucher Entry in Tally",
    topics: [
        {
            heading: "Contra Voucher (F4)",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                <strong>📅 Month 3 Target (Days 51-54):</strong> Master internal money routing.
            </div>
            <strong>Press F4 from the Vouchers screen.</strong><br>
            Contra is a specialized voucher used ONLY for internal money movement between Cash and Bank accounts. No outside supplier or customer is involved.<br><br>
            <strong>Examples:</strong><br>
            1. Depositing Cash into the Bank (Dr. Bank / Cr. Cash).<br>
            2. Withdrawing Cash from the ATM for office use (Dr. Cash / Cr. Bank).<br>
            3. Transferring funds from SBI Bank to HDFC Bank (Dr. HDFC / Cr. SBI).
            <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 51-54)</h4>
                <ul>
                    <li><strong>Day 51-54:</strong> Pass 20 complex Contra entries involving ATM withdrawals, petty cash transfers, and Bank-to-Bank NEFTs.</li>
                </ul>
            </div>`,
            shortcut: "F4 = Internal Cash/Bank movement ONLY.",
            imgSrc: "images/T19.png"
        },
        {
            heading: "Payment (F5) and Receipt (F6) Vouchers",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                <strong>📅 Month 3 Target (Days 55-60):</strong> Record core daily cash flows of a business.
            </div>
            <strong>Payment Voucher (F5):</strong> Used strictly when money is going OUT of the business. You use it to pay Suppliers (Creditors), pay office rent, pay salaries, or purchase fixed assets for cash.<br><br>
            <strong>Receipt Voucher (F6):</strong> Used strictly when money is coming INTO the business. You use it when the owner brings in Capital, when you receive a loan, or when a Customer (Debtor) pays their outstanding bill.
            <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 55-60)</h4>
                <ul>
                    <li><strong>Day 55-60:</strong> Record 30 diverse entries involving paying office rent, receiving student fees, paying supplier balances, and owner capital investments. Check the Cash Ledger balance afterwards.</li>
                </ul>
            </div>`,
            shortcut: "F5 = Money Out | F6 = Money In.",
            imgSrc: "images/T20.png"
        },
        {
            heading: "Journal Voucher (F7)",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                <strong>📅 Month 3 Target (Days 61-65):</strong> Handle complex non-cash adjustments.
            </div>
            <strong>Press F7 from the Vouchers screen.</strong><br>
            The Journal is the adjustment voucher. It is used for transactions where absolutely NO cash or bank money moves at that exact moment.<br><br>
            <strong>Uses:</strong><br>
            1. Buying Fixed Assets on credit (Dr. Computer / Cr. Supplier A/c).<br>
            2. Recording Depreciation on assets (Dr. Depreciation / Cr. Asset).<br>
            3. Adjusting tax liabilities or rectifying accounting errors.
            <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 61-65)</h4>
                <ul>
                    <li><strong>Day 61-65:</strong> Pass 15 non-cash adjustment entries, including buying office furniture on credit, writing off bad debts, and calculating 10% depreciation on machinery.</li>
                </ul>
            </div>`,
            shortcut: "F7 = Non-Cash Adjustments and Credit Purchases of Assets.",
            imgSrc: "images/T21.png"
        },
        {
            heading: "Sales (F8) & Purchase (F9) Vouchers",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                <strong>📅 Month 3 Target (Days 66-70):</strong> Master B2B and B2C trading invoices.
            </div>
            These vouchers are exclusively for trading stock/inventory.<br><br>
            <strong>Purchase (F9):</strong> Used when buying goods from a supplier to resell. Enter the Supplier Invoice No, select the Party A/c, select Purchase A/c, and list the items and quantities.<br>
            <strong>Sales (F8):</strong> Used when selling goods to a customer. Select the Party A/c, Sales A/c, and list the items. Tally will automatically calculate the subtotal.
            <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 66-70)</h4>
                <ul>
                    <li><strong>Day 66-70:</strong> Process 40 B2B trading invoices. Generate sales bills for 20 customers, and log purchase bills from 20 suppliers using 'Item Invoice' mode.</li>
                </ul>
            </div>`,
            shortcut: "Press Ctrl+H (Change Mode) in F8/F9 to switch between 'Item Invoice' (for inventory) and 'As Voucher' (for manual Dr/Cr entries).",
            imgSrc: "images/T22.png"
        },
        {
            heading: "Credit/Debit Notes & Day Book Overview",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                <strong>📅 Month 3 Target (Days 71-75):</strong> Handle damaged goods returns and perform daily audits.
            </div>
            What happens if goods are damaged and returned?<br>
            <strong>Debit Note (Alt+F5):</strong> Purchase Return. You return damaged goods back to your supplier.<br>
            <strong>Credit Note (Alt+F6):</strong> Sales Return. A customer returns damaged goods back to you.<br><br>
            <strong>The Day Book:</strong> (Gateway > Day Book) acts as your daily ledger log. It lists every single voucher entered on a specific date. You can press 'Enter' on any voucher to alter it, or press 'Alt+X' to safely cancel it.
            <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 71-75)</h4>
                <ul>
                    <li><strong>Day 71-73:</strong> Process 10 complex Purchase and Sales returns using Credit/Debit notes.</li>
                    <li><strong>Day 74-75:</strong> Open the Day Book. Change the period (Alt+F2) to view the entire month. Find 3 specific errors placed by the instructor and use Alt+X to cancel them.</li>
                </ul>
            </div>`,
            shortcut: "Press F10 (Other Vouchers) if you forget the shortcuts for Debit/Credit Notes.",
            imgSrc: "images/T23.png"
        }
    ]
});

// ==========================================
// MODULE 7: INVENTORY MANAGEMENT (MONTH 4)
// ==========================================
tallyProBookData.push({
    id: "module7",
    title: "Module 7: Inventory Management",
    topics: [
        {
            heading: "Units of Measure (Simple & Compound)",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                <strong>📅 Month 4 Target (Days 76-80):</strong> Build complex measurement structures for wholesale businesses.
            </div>
            Before adding stock, Tally must know how you count it. Go to <strong>Create > Unit</strong>.<br>
            <strong>Simple Units:</strong> Create a Symbol (PCS) and Formal Name (Pieces). You MUST select the official UQC (Unique Quantity Code) as 'NOS-NUMBERS' for GST filing.<br>
            <strong>Compound Units:</strong> Press Backspace on the Unit Creation screen and change the Type to 'Compound'. You can define logic like "Box of 10 PCS". This allows Tally to accurately track inventory if you sell 1 full Box or just 2 loose individual pieces from the box.
            <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 76-80)</h4>
                <ul>
                    <li><strong>Day 76-80:</strong> Create 10 Simple Units with correct UQCs. Then, create 5 Compound units (e.g., 'Box of 12 Dozen', 'Carton of 50 PCS').</li>
                </ul>
            </div>`,
            shortcut: "Always assign the correct UQC (Unique Quantity Code) to prevent errors when generating e-Way bills or GST Returns.",
            imgSrc: "images/T24.png"
        },
        {
            heading: "Creating Stock Groups, Categories & Items",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                <strong>📅 Month 4 Target (Days 81-86):</strong> Organize massive warehouse inventories cleanly.
            </div>
            To keep a clean godown, organize your stock hierarchically.<br>
            - <strong>Stock Group:</strong> The main family (e.g., 'Mobile Phones').<br>
            - <strong>Stock Category:</strong> An independent classification. (Create > Show More > Stock Category). Create categories like 'Samsung' or 'Dell'.<br>
            - <strong>Stock Item:</strong> The actual product. Go to Create > Stock Item. Name it 'Samsung Galaxy S23', put it under Mobile Phones group, Samsung category, and PCS unit.
            <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 81-86)</h4>
                <ul>
                    <li><strong>Day 81-86:</strong> Build a complete Electronics Store inventory tree. Create 5 Main Groups, 10 Categories (Brands/5G/4G), and 40 individual Stock Items mapped perfectly.</li>
                </ul>
            </div>`,
            shortcut: "Press F12 while creating a Stock Item to enable item descriptions, part numbers, or alternative units.",
            imgSrc: "images/T25.png"
        },
        {
            heading: "Godown Creation and Tracking",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                <strong>📅 Month 4 Target (Days 87-92):</strong> Track multi-location physical inventory transfers.
            </div>
            If you store goods in multiple physical locations, you need Godowns. Press <strong>F11</strong> and ensure 'Maintain Multiple Godowns' is enabled.<br><br>
            Go to <strong>Create > Godown</strong>. Create 'Main Shop' and 'Warehouse A'. Now, when passing a Purchase (F9) or Sales (F8) voucher, an extra box will pop up asking exactly which Godown the item is entering or leaving.
            <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 87-92)</h4>
                <ul>
                    <li><strong>Day 87-92:</strong> Purchase 500 units of stock into 'Warehouse A'. Use a Stock Journal (Alt+F7) to physically transfer 100 units from 'Warehouse A' to 'Main Shop'. Verify the balance in both Godowns.</li>
                </ul>
            </div>`,
            shortcut: "Tally provides a default godown named 'Main Location'.",
            imgSrc: "images/T26.png"
        },
        {
            heading: "Entering Opening Stock & Inventory Reports",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                <strong>📅 Month 4 Target (Days 93-100):</strong> Audit and analyze warehouse health.
            </div>
            <strong>Opening Stock:</strong> Go to Alter > Stock Item. Select your item, go to the bottom field named 'Opening Balance', enter the Quantity and the Rate.<br><br>
            <strong>Stock Summary:</strong> Go to Gateway of Tally > Stock Summary. This report shows your real-time closing stock and its total financial value. Press Alt+F5 for a detailed view. If you select an item and press Enter, you will see the 'Godown/Item Vouchers', which lists every single inward and outward movement of that product.
            <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 93-100)</h4>
                <ul>
                    <li><strong>Day 93-96:</strong> Enter opening stock for 20 items from last year's records.</li>
                    <li><strong>Day 97-100:</strong> Analyze the Stock Summary. Locate 3 items flashing "Negative Stock" warnings. Investigate the Day Book, find the over-sold vouchers, and fix the errors.</li>
                </ul>
            </div>`,
            shortcut: "Press F12 in Stock Summary to show Opening Balance, Goods Inwards, Goods Outwards, and Closing Balance side-by-side.",
            imgSrc: "images/T27.png"
        }
    ]
});
// ==========================================
// BATCH 3: Taxation, Payroll, Banking & Final Exams
// ==========================================

// ==========================================
// MODULE 8: TAXATION - GST, TDS, TCS (MONTH 5)
// ==========================================
tallyProBookData.push({
    id: "module8",
    title: "Module 8: Taxation (GST, TDS, TCS)",
    topics: [
        {
            heading: "Enabling GST & Creating Tax Ledgers",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                <strong>📅 Month 5 Target (Days 101-105):</strong> Configure the legal tax framework of the business.
            </div>
            Press <strong>F11 (Features)</strong>. Set 'Enable GST' to Yes. Select your State, Registration Type, and type the 15-digit GSTIN.<br><br>
            Tax ledgers must be grouped under <strong>Duties & Taxes</strong>. Create 3 ledgers (Type: GST):<br>
            - <strong>CGST</strong> (Central Tax) & <strong>SGST</strong> (State Tax) for inside-state sales.<br>
            - <strong>IGST</strong> (Integrated Tax) for outside-state sales.
            <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 101-105)</h4>
                <ul>
                    <li><strong>Day 101-105:</strong> Configure the main company GSTIN. Create the CGST, SGST, and IGST master ledgers. Update 5 Supplier ledgers with their correct State and 15-digit GSTINs.</li>
                </ul>
            </div>`,
            shortcut: "Never hard-code the tax rate (like 'CGST 9%') into the ledger. Keep it generic ('CGST') and let Tally pull the exact rate from the Stock Item.",
            imgSrc: "images/T28.png"
        },
        {
            heading: "GST-enabled Sales & Purchase Entries",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                <strong>📅 Month 5 Target (Days 106-112):</strong> Process automated tax billing for local and interstate trading.
            </div>
            While creating a Stock Item, set 'GST Applicable' to Yes and enter the HSN code and Tax Rate (e.g., 18%). Now, when you pass a Sales Voucher (F8), select the item, and at the bottom, select CGST and SGST. Tally will automatically calculate exactly 9% for CGST and 9% for SGST based on the item's rate.
            <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 106-112)</h4>
                <ul>
                    <li><strong>Day 106-112:</strong> Process 30 Invoices. Ensure 15 are Local (CGST/SGST) and 15 are Interstate (IGST). Use <strong>Ctrl+O > GST Tax Analysis</strong> on every bill to verify Tally's mathematical breakdown before saving.</li>
                </ul>
            </div>`,
            shortcut: "If the tax does not calculate automatically, immediately check if the Customer's State matches your State.",
            imgSrc: "images/T29.png"
        },
        {
            heading: "GSTR-1, GSTR-3B Reporting in Tally",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                <strong>📅 Month 5 Target (Days 113-118):</strong> Generate and export legal government tax returns.
            </div>
            Tally automatically drafts your government tax returns.<br><br>
            - <strong>GSTR-1 (Outward Supplies):</strong> Press Alt+G and type 'GSTR-1'. Shows all B2B and B2C sales invoices.<br>
            - <strong>GSTR-3B (Summary Return):</strong> Shows your total tax liability against your Input Tax Credit (ITC).<br>
            Press <strong>Alt+E</strong> to export the Return as a JSON file for the Government GST Portal.
            <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 113-118)</h4>
                <ul>
                    <li><strong>Day 113-118:</strong> Open GSTR-1. Locate 5 intentional GSTIN errors placed in the "Uncertain Transactions" bucket by the instructor. Fix the errors so the bucket drops to 0, then Export the final JSON file.</li>
                </ul>
            </div>`,
            shortcut: "Alt + G > type 'GSTR-1' or 'GSTR-3B'.",
            imgSrc: "images/T30.png"
        },
        {
            heading: "TDS Deduction & TCS Entries",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                <strong>📅 Month 5 Target (Days 119-125):</strong> Master direct taxation (TDS/TCS) routing and statutory payments.
            </div>
            <strong>TDS:</strong> If you receive an Audit bill for ₹50,000, use a Journal (F7) to Dr. Audit Expense 50,000 | Cr. Sharma CA 45,000 | Cr. TDS on Prof Fees 5,000. Then use Payment (F5) to pay Sharma CA, and a Stat Payment to pay the Government.<br><br>
            <strong>TCS:</strong> Collected by the seller from the buyer at the time of sale. You add a 'TCS' ledger at the bottom of the Sales Voucher (F8), and Tally calculates TCS on the total bill value.
            <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 119-125)</h4>
                <ul>
                    <li><strong>Day 119-122:</strong> Pass 5 Journal entries deducting 10% TDS for Rent and Audit fees. Pass the subsequent Bank Payment vouchers to clear the liabilities.</li>
                    <li><strong>Day 123-125:</strong> Process 5 Sales invoices for 'Scrap Material', collecting TCS automatically on the bill.</li>
                </ul>
            </div>`,
            shortcut: "TDS is almost always deducted via a Journal Entry before the actual payment is made.",
            imgSrc: "images/tpro-29-tds-entries.png"
        }
    ]
});

// ==========================================
// MODULE 9: PAYROLL & EMPLOYEE RECORDS (MONTH 6)
// ==========================================
tallyProBookData.push({
    id: "module9",
    title: "Module 9: Payroll & Employee Records",
    topics: [
        {
            heading: "Enabling Payroll & Employee Masters",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                <strong>📅 Month 6 Target (Days 126-128):</strong> Build a complete digital Human Resources database.
            </div>
            Press <strong>F11 > Maintain Payroll (Yes)</strong>. Set 'Enable Payroll Statutory' to Yes and enter your company's PF/ESI registration codes.<br><br>
            Go to Create > Show More. Create <strong>Employee Groups</strong> (e.g., 'Marketing'). Then, go to <strong>Employee</strong> creation. Enter their Name, Joining Date, Group, PAN, Aadhaar, and Bank Account details.
            <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 126-128)</h4>
                <ul>
                    <li><strong>Day 126-128:</strong> Create 3 Employee Groups. Create 10 full Employee profiles inside those groups, including their full Bank Details and official ID formats for statutory compliance.</li>
                </ul>
            </div>`,
            shortcut: "Proper employee grouping allows you to process salaries for whole departments at once.",
            imgSrc: "images/tpro-31-payroll-enable.png"
        },
        {
            heading: "Attendance & Pay Heads Configuration",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                <strong>📅 Month 6 Target (Days 129-132):</strong> Program the mathematical logic for automated salary structures.
            </div>
            Go to <strong>Create > Attendance/Production Type</strong>. Create 'Present' (Leave with Pay) and 'Absent' (Leave without Pay).<br><br>
            A <strong>Pay Head</strong> is a component of the salary (Create > Pay Head).<br>
            - <em>Basic Pay & HRA:</em> 'Earnings for Employees', Calculation 'On Attendance'.<br>
            - <em>PF Deduction:</em> 'Employees Statutory Deduction', Calculation 'As Computed Value' (e.g., 12%).
            <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 129-132)</h4>
                <ul>
                    <li><strong>Day 129-132:</strong> Configure 5 Pay Heads (Basic, HRA, DA, PF, ESI). Link them to the 10 Employees created yesterday using 'Define Salary Details', entering their exact monthly package limits.</li>
                </ul>
            </div>`,
            shortcut: "Pay Heads define the logic. Salary Details attach that logic to the specific person.",
            imgSrc: "images/tpro-33-pay-heads.png"
        },
        {
            heading: "Processing Payroll & Payslip Generation",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                <strong>📅 Month 6 Target (Days 133-135):</strong> Execute bulk salary processing and print official Payslips.
            </div>
            <strong>Step 1:</strong> Go to Vouchers > F10 > Attendance. Select the employee, choose 'Present', and enter 28 Days.<br>
            <strong>Step 2:</strong> Go to Vouchers > F10 > Payroll. Press <strong>Ctrl+F (Autofill)</strong>. Select 'Salary', choose the date range, and select the Employee Group. Tally will calculate the Basic Pay, deduct the PF, and generate the exact payable amount instantly!
            <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 133-135)</h4>
                <ul>
                    <li><strong>Day 133-135:</strong> Enter Attendance for all 10 employees (give some 30 days, some 25 days). Use Payroll Autofill to process the salary for the entire company at once. Export and print 5 official Payslips.</li>
                </ul>
            </div>`,
            shortcut: "Ctrl + F (Payroll Autofill) is the most powerful automation button in the payroll system.",
            imgSrc: "images/tpro-34-payroll-process.png"
        }
    ]
});

// ==========================================
// MODULE 10: BANKING FEATURES (MONTH 6 CONT.)
// ==========================================
tallyProBookData.push({
    id: "module10",
    title: "Module 10: Banking Features in Tally",
    topics: [
        {
            heading: "Bank Reconciliation Statement (BRS)",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                <strong>📅 Month 6 Target (Days 136-139):</strong> Audit and align software data with real-world bank statements.
            </div>
            Your Tally bank balance rarely matches your real Passbook due to uncleared cheques. To fix this, go to <strong>Banking > Bank Reconciliation</strong>. Select your Bank. Tally shows all un-reconciled transactions. Look at your real bank statement, and type the actual 'Bank Date' next to the entries that have cleared. The 'Balance as per Bank' at the bottom will automatically update to match your real Passbook exactly!
            <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 136-139)</h4>
                <ul>
                    <li><strong>Day 136-139:</strong> Take a printed physical Bank Statement with 20 transactions. Open Tally's BRS screen and enter the clearance dates manually until the 'Balance as per Bank' perfectly matches the paper statement.</li>
                </ul>
            </div>`,
            shortcut: "Gateway > Banking > Bank Reconciliation (or Alt+R from the bank ledger display).",
            imgSrc: "images/tpro-35-brs.png"
        },
        {
            heading: "Cheque Printing & e-Banking Integration",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                <strong>📅 Month 6 Target (Days 140-143):</strong> Automate banking paperwork and digital fund transfers.
            </div>
            <strong>Cheque Printing:</strong> Alter your Bank Ledger, enable 'Enable Cheque Printing', and select your exact bank (like HDFC) from Tally's library. Put a blank cheque in your printer, pass a Payment voucher, and Tally will print the Name and Amount perfectly on the lines.<br><br>
            <strong>e-Banking Integration:</strong> Pass your payment vouchers, go to Banking > e-Payments, and export the file. Upload this file to your corporate net-banking portal to process all salaries or supplier payments simultaneously.
            <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 140-143)</h4>
                <ul>
                    <li><strong>Day 140-143:</strong> Configure Cheque Printing for SBI. Generate 5 Payment Vouchers and use 'Print Preview' to check the text alignment on the digital cheque template. Print a 'Deposit Slip' for 5 received customer cheques.</li>
                </ul>
            </div>`,
            shortcut: "Always use 'Print Preview' to check alignment before wasting a real physical cheque.",
            imgSrc: "images/tpro-36-cheque-print.png"
        }
    ]
});

// ==========================================
// MODULE 11: CAPSTONE PROJECTS (FINAL EXAMS)
// ==========================================
tallyProBookData.push({
    id: "module11",
    title: "Module 11: Capstone Projects (Final Exams)",
    topics: [
        {
            heading: "Project 1: The Trading Company Setup",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                <strong>📅 Month 6 Target (Days 144-145):</strong> Final Evaluation - Trade & Inventory.
            </div>
            <strong>Task:</strong> Create a company named 'Excellent Traders'. Enable GST (18%).<br>
            1. Pass Receipt (F6): Owner brings ₹10,00,000 Capital into HDFC Bank.<br>
            2. Create Godowns: 'Shop' and 'Warehouse'.<br>
            3. Pass Purchase (F9): Buy 100 Dell Laptops @ ₹30,000 each (plus CGST/SGST). Store 20 in Shop, 80 in Warehouse.<br>
            4. Pass Sales (F8): Sell 5 Laptops @ ₹45,000 each (plus CGST/SGST) to 'Raj IT Solutions'.
            <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 144-145)</h4>
                <ul>
                    <li><strong>Execution:</strong> Complete the above cycle without assistance. Check your Profit & Loss A/c to verify Gross Profit. View GSTR-1 to ensure the sale is recorded correctly.</li>
                </ul>
            </div>`,
            shortcut: "Save your data backup (Alt+Y) in your student folder after completing the project.",
            imgSrc: "images/tpro-39-project1.png"
        },
        {
            heading: "Project 2: The Service & Taxation Challenge",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                <strong>📅 Month 6 Target (Days 146-147):</strong> Final Evaluation - Complex Corporate Taxation.
            </div>
            <strong>Task:</strong> Your company received an Audit Service bill from 'Sharma CA' for ₹60,000.<br>
            1. Enable TDS in F11. Create a TDS Ledger for 'TDS on Professional Fees @ 10%'.<br>
            2. Pass Journal (F7) to record the expense and automatically deduct ₹6,000 as TDS.<br>
            3. Pass Payment (F5) to pay ₹54,000 to Sharma CA.<br>
            4. Pass Payment (F5) using Autofill (Ctrl+F) to pay the ₹6,000 TDS to the Government.
            <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 146-147)</h4>
                <ul>
                    <li><strong>Execution:</strong> Complete the TDS routing. Open the Balance Sheet. Ensure 'Duties & Taxes' shows exactly zero liability for TDS after your final government payment is processed.</li>
                </ul>
            </div>`,
            shortcut: "TDS must ALWAYS be deducted via a Journal entry before processing the Payment voucher.",
            imgSrc: "images/tpro-40-project2.png"
        },
        {
            heading: "Project 3: Advanced Payroll Automation",
            text: `
            <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-bottom:15px; border-left:4px solid #0f766e;">
                <strong>📅 Month 6 Target (Days 148-150):</strong> Final Evaluation - HR & Salary Automation.
            </div>
            <strong>Task:</strong> Create an employee 'Anil Kumar' with a Basic Pay of ₹15,000/month. Create an Attendance type 'Present'. Pass an Attendance voucher marking Anil present for 28 days in April. Use Payroll Autofill to process his salary.
            <div style="background:#ecfdf5; padding:15px; border-radius:8px; border:1px solid #10b981; margin-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#047857;">💻 Daily Practical Assignment (Days 148-150)</h4>
                <ul>
                    <li><strong>Execution:</strong> Run the automated payroll cycle. Ensure your Pay Heads are strictly defined ('On Attendance' for Basic Pay, and 'As Computed Value' for PF). Print the final Payslip showing the exact pro-rated salary for 28 days.</li>
                    <li><strong>Graduation:</strong> Perform a final data backup to a USB drive and submit to the instructor to officially complete the PGDCA Tally Masterclass!</li>
                </ul>
            </div>`,
            shortcut: "Ensure the month has 30 days in your calculation settings.",
            imgSrc: "images/tpro-41-project3.png"
        }
    ]
});
