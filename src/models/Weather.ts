import { z } from "zod";

export const WeatherDataSchema = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    temp_min: z.number(),
    temp_max: z.number(),
  }),
  weather: z.array(
    z.object({
      description: z.string(),
      icon: z.string(),
    })
  ),
});
export type WeatherData = z.infer<typeof WeatherDataSchema>;

export type Location = {
  latitude: number;
  longitude: number;
};
