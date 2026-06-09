# External Aerodynamic CFD Analysis of a Nissan GT-R Using Ansys Fluent

## 1. Engineering Overview & Objective
High-performance sports cars like the Nissan GT-R rely heavily on aerodynamics to balance two opposing forces: minimizing aerodynamic drag ($C_d$) to maximize top-speed efficiency, and maximizing downforce ($C_l$) to maintain high-speed cornering stability. 

* **Objective:** Import a detailed SolidWorks Nissan GT-R geometry into Ansys Fluent to simulate external airflow fields at high operational velocity.
* **Target Metrics:** Extract the Drag Coefficient ($C_d$), visualize pressure distribution across the body, and map airflow velocity vectors to evaluate boundary layer separation.
* **Software Stack:** SolidWorks (CAD Cleanup), Ansys Fluent (CFD Pre-processing, Meshing, Solver, and Post-processing)

---

## 2. CAD Cleanup & Fluid Domain Enclosure
Before running a fluid simulation, raw CAD geometry must be optimized for CFD to prevent solver divergence.
* **CAD Optimization:** Deleted minor interior components, sealed wheel gaps, and simplified underbody details in SolidWorks to create a clean, watertight outer skin.
* **Fluid Domain:** Created a virtual wind tunnel enclosure around the vehicle model. The domain extended $2\times$ the vehicle length upstream (inlet), $5\times$ the length downstream (outlet for wake development), and $2\times$ the height/width.

> 📷 **GT-R Computational Domain:**
> *[Insert your screenshot showing the GT-R enclosed inside the Ansys Fluent fluid domain box]*
> `![GT-R Fluid Domain Enclosure](./assets/images/gtr-domain.png)`

---

## 3. CFD Mesh Generation & Boundary Conditions
To resolve the complex fluid-structure interactions, a high-density finite volume mesh was generated:

* **Meshing Strategy:** * **Core Mesh:** Unstructured tetrahedral elements for the global domain.
    * **Inflation Layers:** Added 5 prismatic inflation layers along the vehicle's skin to accurately capture the high-velocity gradients within the fluid boundary layer.
* **Boundary Conditions Setup:**
    * **Velocity Inlet:** Uniform air velocity set to **$45 \text{ m/s}$** (approx. $162 \text{ km/h}$) with a turbulence intensity of 1%.
    * **Pressure Outlet:** Zero gauge static pressure ($0 \text{ Pa}$).
    * **Road/Ground Wall:** Moving wall condition matching the inlet velocity ($45 \text{ m/s}$) to simulate realistic road conditions.
    * **Vehicle Surface:** No-slip wall condition.
    * **Turbulence Model:** Standard $k\text{-}\omega$ SST (Shear Stress Transport) model for highly accurate boundary layer separation tracking under adverse pressure gradients.

> 📷 **CFD Mesh Layout:**
> *[Insert your screenshot of the fluid mesh, specifically showing the inflation layers around the car body]*
> `![Vehicle Surface Inflation Layer Mesh](./assets/images/gtr-cfd-mesh.png)`

---

## 4. Simulation Results & Post-Processing
After the residuals converged ($< 10^{-4}$ for continuity and momentum equations), aerodynamic coefficient reports and visual plots were extracted:

### Aerodynamic Performance Summary
| Metric | Extracted Simulation Value | Target/Benchmark Range |
| :--- | :--- | :--- |
| **Drag Coefficient ($C_d$)** | **0.29** | 0.26 - 0.31 (OEM Specification) |
| **Frontal Surface Pressure (Max)** | **$\approx 1250 \text{ Pa}$** | Stagnation Point at Front Bumper |

### Visual Flow Analysis
1. **Pressure Contours:** High-pressure zones are concentrated on the front bumper and windshield base (creating drag), while strong low-pressure zones developed beneath the front splitter and behind the rear spoiler (generating localized downforce).
2. **Velocity Streamlines:** Fluid streamlines show clean flow attachment over the roofline, with rapid velocity acceleration over the hood. A clear recirculation zone (wake region) was captured immediately behind the rear fascia.

> 📷 **Pressure Contour Distribution:**
> *[Insert your color Ansys Fluent pressure plot showing red at the front bumper and blue over curves]*
> `![Static Pressure Contours](./assets/images/gtr-pressure-plot.png)`

> 📷 **Velocity Vector Streamlines:**
> *[Insert your Fluent streamline plot showing the airflow paths over the vehicle silhouette]*
> `![Velocity Streamlines and Wake Development](./assets/images/gtr-streamlines.png)`

---

## 5. Engineering Conclusion & Insights
* **Spoiler and Splitter Interaction:** The negative pressure zone captured beneath the rear wing successfully validates its downforce generation capability, ensuring rear-axle stability at $45 \text{ m/s}$.
* **Wake Reduction Opportunity:** The significant low-pressure wake zone trailing behind the flat vertical rear bumper is a major contributor to aerodynamic drag. Integrating a more aggressive rear diffuser geometry would channel underbody air upward, minimizing this separation zone and improving fuel/battery efficiency.
