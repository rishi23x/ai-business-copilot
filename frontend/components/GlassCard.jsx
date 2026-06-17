export default function GlassCard({title,value}){

return (

<div className="
backdrop-blur-xl
bg-white/10
border
border-white/20
rounded-2xl
p-5
shadow-xl
text-white
">

<p className="text-gray-400">
{title}
</p>

<h2 className="text-3xl font-bold mt-2">
{value}
</h2>

</div>

)

}
