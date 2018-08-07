<?php

class montereysigns_constants extends page_base {

    public function build(output $output) {
        $this->response = $this->setup_constants();
        $output->format($this->response, output::angular);
    }

    // --- helpers ---
    private function setup_constants() {
        $return = array(
            'Default'        => array(
                'Year' => date('Y'),
            ),
            'Infrastructure' => array(
                'Result' => cst_infrastructure::result,
                'Pass'   => cst_infrastructure::pass,
                'Fail'   => cst_infrastructure::fail,
            ),
            'P'              => array(
                'Image'  => cst_montereysigns::p_image,
                'Info'   => cst_montereysigns::p_info,
                'Key'    => cst_montereysigns::p_key,
                'Subnav' => cst_montereysigns::p_subnav,
                'Url'    => cst_montereysigns::p_url,
            ),
            'Navbar'         => array(
                array(
                    cst_montereysigns::p_key    => cst_montereysigns::choose_sign,
                    cst_montereysigns::p_url    => null,
                    cst_montereysigns::p_subnav => array(
                        array(
                            cst_montereysigns::p_key => cst_montereysigns::commercial,
                            cst_montereysigns::p_url => cst_montereysigns::url_sitedown,
                        ),
                        array(
                            cst_montereysigns::p_key => cst_montereysigns::printed,
                            cst_montereysigns::p_url => cst_montereysigns::url_sitedown,
                        ),
                        array(
                            cst_montereysigns::p_key => cst_montereysigns::electrical,
                            cst_montereysigns::p_url => cst_montereysigns::url_sitedown,
                        ),
                        array(
                            cst_montereysigns::p_key => cst_montereysigns::services,
                            cst_montereysigns::p_url => cst_montereysigns::url_sitedown,
                        ),
                    ),
                ),
                array(
                    cst_montereysigns::p_key    => cst_montereysigns::our_work,
                    cst_montereysigns::p_url    => cst_montereysigns::url_sitedown,
                    cst_montereysigns::p_subnav => null,
                ),
                array(
                    cst_montereysigns::p_key    => null,
                    cst_montereysigns::p_url    => null,
                    cst_montereysigns::p_subnav => '/resources/img/monterey-signs.png',
                ),
                array(
                    cst_montereysigns::p_key    => cst_montereysigns::sign_stories,
                    cst_montereysigns::p_url    => cst_montereysigns::url_sitedown,
                    cst_montereysigns::p_subnav => null,
                ),
                array(
                    cst_montereysigns::p_key    => cst_montereysigns::about_us,
                    cst_montereysigns::p_url    => cst_montereysigns::url_sitedown,
                    cst_montereysigns::p_subnav => null,
                ),
                array(
                    cst_montereysigns::p_key    => cst_montereysigns::nuts_bolts,
                    cst_montereysigns::p_url    => cst_montereysigns::url_sitedown,
                    cst_montereysigns::p_subnav => null,
                ),
            ),
            'Url'            => array(
                'Home'     => cst_montereysigns::url_home,
                'Sitedown' => cst_montereysigns::url_sitedown,
            ),
        );
        return $return;
    }

}
