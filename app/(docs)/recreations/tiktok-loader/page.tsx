import { PageLayout } from "@/components/page-layout"
import { TikTokLoader } from "./tiktok-loader"

export const metadata = { title: "TikTok Loader" }

export default function TrafficLightsPage() {
  return (
    <PageLayout category="RECREATIONS" title="TikTok Loader">
      <p>A recreation of the TikTok loader/spinner.</p>
      <TikTokLoader />
    </PageLayout>
  )
}
