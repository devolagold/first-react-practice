# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
"# first-react-practice" 

<div className="bg-[#E0E1E7] flex flex-col space-y-4 justify-center items-center w-screen h-screen">
            <div className="md:w-1/2 content bg-white p-6 md:p-8 shadow-sm rounded-lg">

                <Header/>
                
                <div className="grid grid-cols-1 gap-6 my-4 mt-8">
                    {todos ? <TodoList todos = {todos}/> : "No todos"}
                </div>

            </div>
        </div>