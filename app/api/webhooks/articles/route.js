// import { revalidateTag } from "next/cache";
// import { NextResponse } from "next/server";

// export async function POST(request) {
//   try {
//     //.....
//     // LOGICA DE SEGURIDAD/VALIDACION DE SECRET KEY PARA ACCESO.
//     //......

//     //Revalidar el cache
//     revalidateTag("articles");

//     return NextResponse.json(
//       { message: "Cache revalidado con exito" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error al revalidar cache articles:", error);
//     return NextResponse.json(
//       { message: "Error al revalidar cache" },
//       { status: 500 }
//     );
//   }
// }
