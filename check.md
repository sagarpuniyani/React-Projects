## Take the Example

```java
class A {
    public static void main( String [] args )
}
```

``` js
const A = () =>{
    console.log("Adding Value = " , );
}
```

# Code Toggle Example

<div id="code-container">
  <h2>Code:</h2>
  <pre id="code">java
class A {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}
</pre>
</div>
<button id="toggle-button">Toggle Code</button>

<script>
  const codeContainer = document.getElementById("code-container");
  const code = document.getElementById("code");
  const toggleButton = document.getElementById("toggle-button");
  let isJavaCodeVisible = true;

  toggleButton.addEventListener("click", toggleCode);

  function toggleCode() {
    if (isJavaCodeVisible) {
      code.textContent = `console.log("Hello, JavaScript!");`;
      code.setAttribute("lang", "javascript");
    } else {
      code.textContent = `class A {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`;
      code.setAttribute("lang", "java");
    }
    isJavaCodeVisible = !isJavaCodeVisible;
  }
</script>
