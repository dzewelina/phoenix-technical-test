using System.Web.Http;

namespace Carfinance.Phoenix.Kata.Angular
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();
        }
    }
}
