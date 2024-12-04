import React from "react";
import NavbarHome from "../../Layout/NavbarHome";
import Menu from "../../Layout/Menu";
import LineChart from "../../components/charts/LineChart";
import BarChart from "../../components/charts/BarChart";
import RegionBarChart from "../../components/charts/RegionBarChart";
import StockBarChart from "../../components/charts/StockBarChart";
import GerminationLineChart from "../../components/charts/GerminationLineChart";
import FeedbackLineChart from "../../components/charts/FeedbackLineChart";
import RetentionLineChart from "../../components/charts/RetentionLineChart";
import ProjectBarChart from "../../components/charts/ProjectBarChart";
import ROIBarChart from "../../components/charts/ROIBarcharts";

function Home() {
  return (
    <>
      <NavbarHome />
      <div className="bg-base-200 flex flex-row min-h-screen w-full">
        <Menu />
        <div className="flex-1 p-8">
          <h1 className="text-4xl font-bold text-center mb-8">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body p-6">
                <h2 className="card-title text-xl mb-2">Ingresos Totales</h2>
                <p className="text-sm text-base-content/70 mb-4">
                  Medición de los ingresos generados por las ventas de semillas.
                </p>
                <div className="w-full aspect-[4/3] flex items-center justify-center">
                  <LineChart />
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body p-6">
                <h2 className="card-title text-xl mb-2">Ventas por Producto</h2>
                <p className="text-sm text-base-content/70 mb-4">
                  Medición de las ventas de cada producto específico.
                </p>
                <div className="w-full aspect-[4/3] flex items-center justify-center">
                  <BarChart />
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body p-6">
                <h2 className="card-title text-xl mb-2">Ventas por Región</h2>
                <p className="text-sm text-base-content/70 mb-4">
                  Medición de las ventas en diferentes regiones geográficas.
                </p>
                <div className="w-full aspect-[4/3] flex items-center justify-center">
                  <RegionBarChart />
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body p-6">
                <h2 className="card-title text-xl mb-2">Stock Disponible</h2>
                <p className="text-sm text-base-content/70 mb-4">
                  Medición del stock disponible de cada producto.
                </p>
                <div className="w-full aspect-[4/3] flex items-center justify-center">
                  <StockBarChart />
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body p-6">
                <h2 className="card-title text-xl mb-2">Índice de Germinación</h2>
                <p className="text-sm text-base-content/70 mb-4">
                  Medición del índice de germinación de las semillas.
                </p>
                <div className="w-full aspect-[4/3] flex items-center justify-center">
                  <GerminationLineChart />
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body p-6">
                <h2 className="card-title text-xl mb-2">Calificación Promedio del Feedback</h2>
                <p className="text-sm text-base-content/70 mb-4">
                  Medición de la calificación promedio del feedback de los
                  clientes.
                </p>
                <div className="w-full aspect-[4/3] flex items-center justify-center">
                  <FeedbackLineChart />
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body p-6">
                <h2 className="card-title text-xl mb-2">Tasa de Retención de Clientes</h2>
                <p className="text-sm text-base-content/70 mb-4">
                  Medición de la tasa de retención de clientes.
                </p>
                <div className="w-full aspect-[4/3] flex items-center justify-center">
                  <RetentionLineChart />
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body p-6">
                <h2 className="card-title text-xl mb-2">Progreso de Proyectos</h2>
                <p className="text-sm text-base-content/70 mb-4">
                  Medición del progreso de los proyectos de investigación y
                  desarrollo.
                </p>
                <div className="w-full aspect-[4/3] flex items-center justify-center">
                  <ProjectBarChart />
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body p-6">
                <h2 className="card-title text-xl mb-2">
                  Retorno de Inversión (ROI) de Campañas
                </h2>
                <p className="text-sm text-base-content/70 mb-4">
                  Medición del retorno de inversión de las campañas de marketing.
                </p>
                <div className="w-full aspect-[4/3] flex items-center justify-center">
                  <ROIBarChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
