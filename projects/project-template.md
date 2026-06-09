# [Project Title: e.g., Structural Optimization of a Mechanical Bracket]

## 1. Project Overview & Objective
*   **Problem Statement:** [Describe what you needed to design or analyze. e.g., The original bracket was failing under high operational loads / was too heavy.]
*   **Objective:** [e.g., Redesign the component to withstand a static load of 5kN while minimizing mass.]
*   **Software Used:** SolidWorks (CAD), SolidWorks Simulation (FEA)

---

## 2. CAD Modeling & Design Constraints
*   **Geometry Details:** [Mention the dimensions or parameters you worked with.]
*   **Material Selection:** [e.g., AISI 1020 Steel / Aluminum 6061-T6] and note the Yield Strength (e.g., $\sigma_{yield} = 250 \text{ MPa}$).
*   **Design Intent:** [Explain why you chose this specific shape, fillets, or features.]

> **💡 Portfolio Tip:** Insert an image link below showing a clear 3D rendering or exploded view of your CAD model.
> `![CAD Model Render](../assets/images/project1-cad.png)`

---

## 3. Finite Element Analysis (FEA) Setup
To ensure the simulation yields realistic results, the following boundary conditions were applied:

*   **Fixture/Constraints:** [e.g., Fixed geometry applied to the rear mounting bolt holes.]
*   **Loading Conditions:** [e.g., A uniform force of 5000 N applied downward on the top face.]
*   **Mesh Details:** 
    *   **Element Type:** [e.g., Solid Tetrahedral Elements (High quality)]
    *   **Mesh Control:** [Mention if you applied a finer mesh near critical fillets or stress concentration zones.]

> **💡 Portfolio Tip:** Insert an image showing your computational mesh here.
> `![FEA Mesh Structure](../assets/images/project1-mesh.png)`

---

## 4. Results & Simulation Analysis
After running the linear static study, the following results were captured:

| Parameter | Maximum Value Observed | Location |
| :--- | :--- | :--- |
| **Von Mises Stress** | [e.g., 180 MPa] | Near the inner sharp radius |
| **Resultant Displacement** | [e.g., 0.45 mm] | At the tip of the loading face |

### Factor of Safety (FOS) Calculation:
$$\text{FOS} = \frac{\sigma_{\text{yield}}}{\sigma_{\text{max}}} = \frac{250 \text{ MPa}}{180 \text{ MPa}} = 1.39$$

> **💡 Portfolio Tip:** Replace these with your simulation plot images (Color stress contours).
> `![Von Mises Stress Plot](../assets/images/project1-stress.png)`
> `![Displacement Plot](../assets/images/project1-displacement.png)`

---

## 5. Engineering Conclusion & Key Takeaways
*   **Validation:** The current design successfully holds the load with an FOS of 1.39, preventing material yield.
*   **Design Iteration:** [If you modified it, explain: e.g., Increasing the fillet radius from 2mm to 5mm successfully dropped peak stress concentration by 25%.]
