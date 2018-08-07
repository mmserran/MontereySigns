<?php

class home extends page_base {

    public function build(output $output) {
        $this->response[cst_montereysigns::p_hero]        = $this->hero_info();
        $this->response[cst_montereysigns::p_info]        = $this->gridlist_info();
        $this->response[cst_montereysigns::p_image_belt]  = $this->image_belt();
        $this->response[cst_montereysigns::p_our_clients] = $this->our_clients();
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

    private function image_belt(): array {
        $return = array(
            '/resources/img/monterey-regional-airport.png',
            '/resources/img/big-sur-canna-botanicals.png',
            '/resources/img/monterey-conference-center.png',
            '/resources/img/big-sur-taphouse_2.png',
            '/resources/img/big-sur-marathon.png',
        );
        return $return;
    }

    private function our_clients(): array {
        $return = array(
            '/resources/img/1st-capital-bank.png',
            '/resources/img/monterey-bay-aquarium.png',
            '/resources/img/verve_2.png',
            '/resources/img/big-sur-taphouse_1.png',
            '/resources/img/monterey-spine-and-joint.png',
            '/resources/img/goodwill.png',
            '/resources/img/santa-cruz-warriors.png',
        );
        return $return;
    }

}
