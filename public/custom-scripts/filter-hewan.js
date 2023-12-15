    // Select all filter buttons
    const showAllButton = document.getElementById("showAllButton");
    const categoryDombaButton = document.getElementById("categoryDombaButton");
    const categorySapiUtuhButton = document.getElementById(
        "categorySapiUtuhButton",
    );
    const categorySapiKolektifButton = document.getElementById("categorySapiKolektifButton");

    // Select all product items
    const products = document.querySelectorAll(".card-hewan");

    // Event listeners for filter buttons
    showAllButton.addEventListener("click", function () {
        setActiveButton(showAllButton);
        filterProducts("All");
        updateURL("All");
    });

    categoryDombaButton.addEventListener("click", function () {
        setActiveButton(categoryDombaButton);
        filterProducts("domba");
        updateURL("domba");
    });

    categorySapiUtuhButton.addEventListener("click", function () {
        setActiveButton(categorySapiUtuhButton);
        filterProducts("sapi utuh");
        updateURL("sapi utuh");
    });

    categorySapiKolektifButton.addEventListener("click", function () {
        setActiveButton(categorySapiKolektifButton);
        filterProducts("sapi kolektif");
        updateURL("sapi kolektif");
    });

    function filterProducts(selectedCategory) {
        products.forEach((product) => {
            const productCategory = product.getAttribute("data-category");
            if (
                selectedCategory === "All" ||
                productCategory === selectedCategory
            ) {
                product.style.display = "flex"; // Show the product
            } else {
                product.style.display = "none"; // Hide the product
            }
        });
    }

    function updateURL(category) {
        // Update the URL parameter to the selected category
        const url = new URL(window.location.href);
        url.searchParams.set("category", category);
        window.history.replaceState(null, "", url);
    }

    function setActiveButton(activeButton) {
        // Remove 'active-filter-button' class from all buttons
        const filterButtons = [
            showAllButton,
            categoryDombaButton,
            categorySapiUtuhButton,
            categorySapiKolektifButton,
        ];

        filterButtons.forEach((button) => {
            button.classList.remove("btn-filter-active");
        });

        // Add 'btn-filter-active' class to the active button
        activeButton.classList.add("btn-filter-active");
    }

    // Initial URL parsing and filtering
    const initialCategory = new URLSearchParams(window.location.search).get(
        "category",
    );
    if (initialCategory) {
        // Determine the initial active button and style it
        let initialActiveButton;
        if (initialCategory === "All") {
            initialActiveButton = showAllButton;
        } else if (initialCategory === "domba") {
            initialActiveButton = categoryDombaButton;
        } else if (initialCategory === "sapi utuh") {
            initialActiveButton = categorySapiUtuhButton;
        } else if (initialCategory === "sapi kolektif") {
            initialActiveButton = categorySapiKolektifButton;
        }
        setActiveButton(initialActiveButton);

        // Filter products based on the initial category
        filterProducts(initialCategory);
    }
