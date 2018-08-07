<?php

class home extends page_base {

    public function build(output $output) {
        $this->response[cst_montereysigns::p_hero] = $this->hero_info();
        $this->response[cst_montereysigns::p_info] = $this->gridlist_info();
        $this->set_response_pass();
        $output->format($this->response, output::angular);
    }

    // --- helpers ---
    private function hero_info(): array {
        $return = array(
            cst_montereysigns::p_key   => cst_montereysigns::monterey_signs,
            cst_montereysigns::p_url   => cst_montereysigns::url_sitedown,
            cst_montereysigns::p_image => '/resources/img/cannery-row_2.png',
        );
        return $return;
    }

    private function gridlist_info(): array {
        $return = array(
            array(
                cst_montereysigns::p_key   => cst_montereysigns::commercial,
                cst_montereysigns::p_url   => cst_montereysigns::url_sitedown,
                cst_montereysigns::p_image => '/resources/img/the-wharf-marketplace_1.png',
            ),
            array(
                cst_montereysigns::p_key   => cst_montereysigns::electrical,
                cst_montereysigns::p_url   => cst_montereysigns::url_sitedown,
                cst_montereysigns::p_image => '/resources/img/verve_3.png',
            ),
            array(
                cst_montereysigns::p_key   => cst_montereysigns::printed,
                cst_montereysigns::p_url   => cst_montereysigns::url_sitedown,
                cst_montereysigns::p_image => '/resources/img/los-angeles-food-wine.png',
            ),
            array(
                cst_montereysigns::p_key   => cst_montereysigns::services,
                cst_montereysigns::p_url   => cst_montereysigns::url_sitedown,
                cst_montereysigns::p_image => '/resources/img/beach-house-dining.png',
            ),
        );
        return $return;
    }

}
