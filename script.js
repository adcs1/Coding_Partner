// Sample algorithm codes
const algorithms = {
    "binary search": `// Binary Search Algorithm in Java
class BinarySearch {
    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        
        while (left <= right) {
            int mid = left + Math.floor((right - left) / 2);
            
            if (arr[mid] == target) {
                return mid; // Element found
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return -1; // Element not found
    }
}
`,
    "bubble sort": `// Bubble Sort Algorithm in Java
class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap arr[j] and arr[j+1]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
}
`};

// Sample coding problems
const codingProblems = {
    "reverse of a number": `// Find Reverse of a Number in Java
class ReverseNumber {
    public static int reverse(int num) {
        int reversed = 0;
        while (num != 0) {
            int digit = num % 10;
            reversed = reversed * 10 + digit;
            num /= 10;
        }
        return reversed;
    }
}
`,
    "palindrome number": `// Check for Palindrome Number in Java
class PalindromeNumber {
    public static boolean isPalindrome(int num) {
        int original = num;
        int reversed = 0;
        while (num != 0) {
            int digit = num % 10;
            reversed = reversed * 10 + digit;
            num /= 10;
        }
        return original == reversed;
    }
}
`,
    "finding if number is even or odd": `// Check if a Number is Even or Odd in Java
class EvenOrOdd {
    public static String isEvenOrOdd(int num) {
        return (num % 2 == 0) ? "Even" : "Odd";
    }
}
`,
    "swapping of a number": `// Swap Two Numbers without a Temporary Variable in Java
class SwapNumbers {
    public static void swap(int a, int b) {
        a = a + b;
        b = a - b;
        a = a - b;
    }
}
`

// Function to handle code display
function displayCode(selectedCode) {
    const codeResult = document.getElementById("codeResult");
    if (selectedCode && (codingProblems[selectedCode] || algorithms[selectedCode])) {
        codeResult.style.color = "yellow"; // Change code text color
        codeResult.textContent = codingProblems[selectedCode] || algorithms[selectedCode];
    } else {
        codeResult.style.color = "white"; //

}: