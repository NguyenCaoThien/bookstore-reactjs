using System.Text.Json;

namespace FashionStore.Api.RequestHelpers
{
    public static class HttpExtension
    {
        public static void AddPaginationHeader(this HttpResponse reponse, MetaData data)
        {
            var options = new JsonSerializerOptions{ PropertyNamingPolicy = JsonNamingPolicy.CamelCase };
            reponse.Headers.Add("Pagination", JsonSerializer.Serialize(data, options));
            reponse.Headers.Add("Access-Control-Expose-Headers", "Pagination");
        }
    }
}
